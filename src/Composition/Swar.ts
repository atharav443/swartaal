import { NoteOptions } from './types';

export class Swar {
  private text: string;
  private duration: number;
  private options: NoteOptions;

  constructor(text: string, duration: number, options: NoteOptions) {
    this.text = text;
    this.duration = duration;
    this.options = {
      octave: options.octave || 'middle',
      komal: options.komal || false,
      tivra: options.tivra || false,
    };
  }

  toXML(): string {
    const octaveAttr =
      this.options.octave !== 'middle'
        ? ` octave="${this.options.octave}"`
        : '';
    const komalAttr = this.options.komal ? ` komal="true" ` : '';
    const tivraAttr = this.options.tivra ? ` tivra="true" ` : '';
    const durationAttr = this.duration
      ? `duration="${this.duration}"`
      : `duration = "1"`;

    return `<swar ${octaveAttr} ${komalAttr} ${tivraAttr} ${durationAttr}>${this.text}</swar>`;
  }

  getswar(): string {
    return this.text;
  }
}
