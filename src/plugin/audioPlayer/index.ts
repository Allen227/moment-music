/**
 * AudioPlayer
 */
export default class AudioPlayer {
  private static _instance: HTMLMediaElement = new Audio();
  /**
   * get single instance
   */
  public static getInstance () {
    return this._instance;
  }
}