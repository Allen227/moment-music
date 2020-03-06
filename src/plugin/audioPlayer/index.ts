import { threadId } from "worker_threads";

/**
 * AudioPlayer
 */
export default class AudioPlayer {
  private static _instance: AudioPlayer = new AudioPlayer();;
  private audio: HTMLMediaElement;
  constructor () {
    this.audio = new Audio();
    this.audio.loop = true;
  }
  /**
   * get single instance
   */
  public static getInstance () {
    return this._instance;
  }
  public play () {
    this.audio.play();
  }
  public pause () {
    this.audio.pause();
  }
  public load () {
    this.audio.load();
  }
  public set src (source: string) {
    this.audio.src = source;
  }
  public get src() {
    return this.audio.src;
  }
  public set loop (isLoop: boolean) {
    this.audio.loop = isLoop;
  }
  public get currentTime () {
    return this.audio.currentTime;
  }
  public set currentTime (time: number) {
    this.audio.currentTime = time;
  }
  public get volume () {
    return this.audio.volume;
  }
  public set volume(volume: number) {
    this.audio.volume = volume;
  }
}