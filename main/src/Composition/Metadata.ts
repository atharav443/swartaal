import { IMetadata } from './types';
import { Taal } from './Taal';

export class Metadata implements IMetadata {
  private title: string;
  private raag: string;
  private taal: Taal;

  constructor(title: string, raag: string, taal: Taal) {
    this.title = title;
    this.raag = raag;
    this.taal = taal;
  }

  toXML(): string {
    return `<metadata>
      <title>${this.title}</title>
      <raag>${this.raag}</raag>
      ${this.taal.toXML()}
    </metadata>`;
  }

  getTitle(): string {
    return this.title;
  }

  getRaag(): string {
    return this.raag;
  }

  getTaal(): Taal {
    return this.taal;
  }
}
