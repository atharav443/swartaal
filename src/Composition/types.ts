export type Octave = 'lower' | 'middle' | 'lower';
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
