import { ILyric } from './types';

export class Lyric implements ILyric {
  private text: string;

  constructor(text: string) {
    this.text = text ? text : 'S';
  }

  toXML(): string {
    return `<lyric>${this.text}</lyric>`;
  }

  getText(): string {
    return this.text;
  }
}
