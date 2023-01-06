import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { Facts } from './model/facts';
import { Fact } from './model/fact';
import { CdPlayer } from './tutorial/CdPlayer';
import { MediaPlayer } from './tutorial/MediaPlayer';
import { YoutubePlayer } from './tutorial/YoutubePlayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  loadedFacts: Facts = new Facts();
  isFetching = false;
  currentPage = 1;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.fetchPosts();
    this.fetchFacts(this.currentPage);
    this.myMediaPlayer();
  }

  // onCreatePost(postData: Post) {
  //   // Send Http request
  //   this.http
  //     .post<{ name: string }>(
  //       'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
  //       postData
  //     )
  //     .subscribe(responseData => {
  //       console.log(responseData);
  //     });
  // }

  // onCreateFact(factFact: string){
    
  // }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  onNext(){
    this.fetchFacts(++this.currentPage);
  }

  onPrevious(){
    this.fetchFacts(--this.currentPage);
  }

  onRemoveFact(id: number){
    this.loadedFacts.data.splice(id, 1);
    // console.log(id)
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http
      .get<Post>(
        'https://catfact.ninja/fact'
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          postsArray.push({...responseData})
          return postsArray;
        })
      )
      .subscribe(posts => {
        // console.log(posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }

  private fetchFacts(pageNumber: number) {
    this.http
    .get<Facts>('https://catfact.ninja/facts?page=' + pageNumber)
    .pipe(
      map(responseData => {
        console.log(responseData);


        return responseData;
      })
    )
    .subscribe(facts => {
      this.loadedFacts = facts;
    })
  }

  private myMediaPlayer() {
    const myCdPlayer: MediaPlayer = new CdPlayer();
    const myYoutubePlayer: MediaPlayer = new YoutubePlayer();

    myCdPlayer.start();
  }
}
