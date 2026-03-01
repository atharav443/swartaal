import { IXMLSerializable } from "../types/types";
import { Metadata } from "./Metadata";
import { Section } from "./Section";



export class Composition implements IXMLSerializable {
  private metadata: Metadata;
  private sections: Section[];

  constructor(metadata: Metadata, sections: Section[]) {
    this.metadata = metadata;
    this.sections = sections;
  }

  toXML(): string {

    const sectionsXML = this.sections.map((section) => section.toXML()).join('\n  ');

    return `<hindustani-composition>
  ${this.metadata.toXML()}
  
  ${sectionsXML}
  </hindustani-composition>`;
  }
}