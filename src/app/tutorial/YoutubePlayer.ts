import { MediaPlayer } from "./MediaPlayer";

export class YoutubePlayer implements MediaPlayer {
    start(): void {
        console.log("YoutubePlayer: start")
    }
    stop(): void {
        console.log("YoutubePlayer: stop")
    }
    pause(): void {
        console.log("YoutubePlayer: pause")
    }
    
}