export type Octave = 'lower' | 'middle' | 'upper';
export type TaalTypes = 'teentaal' | 'ektaal' | 'jhaptaal' | 'rupak';

export interface SwarOptions {
  octave?: Octave;
  komal?: boolean;
  tivra?: boolean;
}

export interface Metadata {
  title?: string;
  raga?: string;
  tala?: string;
}

// Interface Contracts
export interface IXMLSerializable {
  toXML(): string;
}

export interface ISwar extends IXMLSerializable {
  getText(): string;
}

export interface ILyric extends IXMLSerializable {
  getText(): string;
}

export interface IMatra extends IXMLSerializable {}

export interface IKhand extends IXMLSerializable {
  addMatra(matra: IMatra): void;
  getMatras(): IMatra[];
}
