/**
 * AudioPlayer
 */
export default class AudioPlayer {
  private static _instance: AudioPlayer;
  private audio: HTMLMediaElement;
  constructor () {
    this.audio = new Audio();
  }
  /**
   * get single instance
   */
  public static getInstance () {
    if (!this._instance) {
      this._instance = new AudioPlayer();
    }
    return this._instance;
  }
  public play () {
    if (this.audio) {
      this.audio.play();
    }
  }
  public load () {
    if (this.audio) {
      this.audio.load();
    }
  }
  public setSrc (source: string) {
    if (this.audio) {
      this.audio.src = source;
    }
  }
}