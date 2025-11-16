export class Lyric {
  private text: string;

  constructor(text: string) {
    this.text = text ? text : 'S';
  }

  toXML(): string {
    return `<lyric>${this.text}</lyric`;
  }

  getLyric(): string {
    return this.text;
  }
}
