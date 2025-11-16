import { Lyric } from './Lyric';
import { Swar } from './Swar';
import { IMatra, ISwar, ILyric } from './types';

export class Matra implements IMatra {
    private index: string;
    private taalmarker: string;
    private swar: ISwar;
    private lyric: ILyric;

    constructor(index: string, taalmarker: string, swar: ISwar, lyric: ILyric) {
        this.index = index;
        this.taalmarker = taalmarker;
        this.swar = swar;
        this.lyric = lyric;
    }

    toXML(): string {
        return `<matra index="${this.index}">
          <tala-marker>${this.taalmarker}</tala-marker>
          ${this.swar.toXML()}
          ${this.lyric.toXML()}
        </matra>`;
    }
}