/**
 * AudioPlayer
 */
export default class AudioPlayer {
  private static _instance: HTMLMediaElement = new Audio();
  /**
   * get single instance
   */
  public static getInstance () {
    // default loop mode
    this._instance.loop = true;
    return this._instance;
  }
}