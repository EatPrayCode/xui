import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { OauthService } from "~/app/services/oauth.service";
import { environment } from "~/environments/environment";

import { Subreddit } from "./subreddit";

@Injectable({
  providedIn: "root"
})
export class MeService {
  constructor(private http: HttpClient, private oauth: OauthService) {}

  getInfo(): void {
    if (!this.oauth.getLoggedIn()) return;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${this.oauth.getToken()}`
      })
    };

    this.http
      .get("https://oauth.reddit.com/api/v1/me", httpOptions)
      .subscribe((data) => {
        if (!environment.production) {
          console.log(data);
        }
      });
  }

  getSubreddits(
    after: string | null = null,
    s: Subject<Subreddit> = new Subject<Subreddit>()
  ): Observable<any> {
    if (!this.oauth.getLoggedIn()) return s;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${this.oauth.getToken()}`
      })
    };

    this.http
      .get(
        `https://oauth.reddit.com/subreddits/mine/subscriber?limit=${
          environment.subredditLimit
        }${after ? "&after=" + after : ""}`,
        httpOptions
      )
      .subscribe((res: any) => {
        res.data.children.forEach((child: any) => {
          s.next(
            new Subreddit(child.data.id, child.kind, child.data.display_name)
          );
        });
        if (res.data.after) {
          this.getSubreddits(res.data.after, s);
        } else {
          s.complete();
        }
      });

    return s;
  }
}
