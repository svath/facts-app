import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './model/post.model';
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
export class AppComponent {
  
}
