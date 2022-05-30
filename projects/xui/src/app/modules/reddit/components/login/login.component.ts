import { Component, OnInit } from "@angular/core";
import { OauthService } from "~/app/services/oauth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  constructor(private oauth: OauthService) {}

  ngOnInit(): void {
    this.oauth.logIn();
  }
}
