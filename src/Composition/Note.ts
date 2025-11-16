import { NoteOptions } from './types';

export class Note {
  private swar: string;
  private options: NoteOptions;

  constructor(swar: string, options: NoteOptions) {
    this.swar = swar;
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

    return `<note ${octaveAttr} ${komalAttr} ${tivraAttr}>${this.swar}</note>`;
  }

  getswar(): string {
    return this.swar;
  }
}
