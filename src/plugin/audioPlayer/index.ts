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
  public setSrc (source: string) {
    this.audio.src = source;
  }
  public getSrc() {
    return this.audio.src;
  }
  public setLoop () {
    this.audio.loop = true;
  }
}