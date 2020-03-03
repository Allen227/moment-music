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