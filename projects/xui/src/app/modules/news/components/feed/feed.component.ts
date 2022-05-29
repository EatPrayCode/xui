import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {debounceTime, map, switchMap, tap, toArray} from 'rxjs/operators';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {ActivatedRoute, Router} from '@angular/router';
import {FeedItem, Post, SiteFeedAbout} from '../models';
import { concat, Observable, of, Subject } from 'rxjs';
import {MAX_POSTS_COUNT, TABLES} from '../constants';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {

    // posts: Observable<any> = of([]);
    posts$: Observable<any> = of([]);
    viewCount: number = 10;
    about: SiteFeedAbout = new SiteFeedAbout();
    private feedId: number;
    private feed: FeedItem = null;

    identify = (index: number, post: Post) => post.id;

    constructor(private dbService: NgxIndexedDBService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    showMore():void {
        this.viewCount += 10;
    }


    markAsRead() {
        this.markAsReadFeed(this.feed);
        this.markAsReadPosts();
    }

    markAsReadFeed(feed: FeedItem): void {
        this.dbService.update(TABLES.FEEDS, {...feed, newCount: 0}).subscribe();
    }

    markAsReadPosts(): void {
        // const newPosts$ = this.posts.filter(p => p.isNew)
        //     .map(post => this.dbService.update(TABLES.POSTS, {...post, isNew: false}));

        // concat(...newPosts$).pipe(toArray()).subscribe();

        // this.posts.forEach(p => {
        //     p.isNew = false;
        // });
    }

    deleteTail(): void {
        // const postForDelete$ = this.posts.slice(MAX_POSTS_COUNT)
        //     .map(post => this.dbService.delete(TABLES.POSTS, post.id));

        // concat(...postForDelete$).pipe(toArray()).subscribe();

    }

    ngOnInit(): void {
        this.posts$ = this.route.params
            .pipe(
                map(params => params.id),
                tap(id => this.feedId = +id),
                switchMap(id => this.dbService.getByID(TABLES.FEEDS, +id)),
                tap((feed: FeedItem) => {
                    this.feed = feed;
                    this.about = feed.about;
                }),
                switchMap(feed => this.dbService.getAllByIndex(TABLES.POSTS, 'feedId', IDBKeyRange.only(this.feedId))),
                tap((posts) => {
                    // this.posts.next(posts);
                    console.log(posts)
                })
            );
    }

    deleteFeed(): void {
        // const result = confirm('Remove the feed?');
        // if (result === true) {

        //     const forDelete$ = [
        //         this.dbService.delete(TABLES.FEEDS, this.feedId),
        //         ...this.posts.map(post => this.dbService.delete(TABLES.POSTS, post.id))
        //     ];
        //     concat(...forDelete$).pipe(toArray())
        //         .subscribe(() => this.router.navigate(['/home']));
        // }
    }

    removeAllPosts(): void {
        // const result = confirm('Remove all the posts?');
        // if (result === true) {
        //     const postForDelete$ = this.posts
        //         .map(post => this.dbService.delete(TABLES.POSTS, post.id));
        //     concat(...postForDelete$).pipe(toArray())
        //         .subscribe(() => this.ngOnInit());
        // }
    }

}
