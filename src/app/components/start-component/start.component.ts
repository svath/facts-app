import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../../model/post.model';
import { CdPlayer } from '../../tutorial/CdPlayer';
import { MediaPlayer } from '../../tutorial/MediaPlayer';
import { YoutubePlayer } from '../../tutorial/YoutubePlayer';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.fetchPosts();
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

  private myMediaPlayer() {
    const myCdPlayer: MediaPlayer = new CdPlayer();
    const myYoutubePlayer: MediaPlayer = new YoutubePlayer();

    myCdPlayer.start();
  }

}
