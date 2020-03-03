/**
 * AudioPlayer
 */
export default class AudioPlayer {
  private static _instance: AudioPlayer = new AudioPlayer();;
  private audio: HTMLMediaElement = new Audio();
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
    if (this.audio) {
      this.audio.src = source;
    }
  }
}