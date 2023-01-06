import { MediaPlayer } from "./MediaPlayer";

export class CdPlayer implements MediaPlayer {
    start(): void {
        console.log("CDPlayer: start")
    }
    stop(): void {
        console.log("CDPlayer: stop")
    }
    pause(): void {
        console.log("CDPlayer: pause")
    }
    
}