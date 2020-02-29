export default class AudioPlayer {
  constructor (private audioDom: HTMLMediaElement) {}
  public play () {
    this.audioDom.play();
  }
  public load () {
    this.audioDom.load();
  }
  public setSrc (source: string) {
    this.audioDom.src = source;
  }
}