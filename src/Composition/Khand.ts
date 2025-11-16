import { Matra } from './Matra';
import { IKhand, IMatra } from './types';

export class Khand implements IKhand {
    private index: string;
    private matras: IMatra[];

    constructor(index: string, matras: IMatra[]) {
        this.index = index;
        this.matras = matras;
    }

    toXML(): string {
        const matrasXML = this.matras
            .map((matra) => matra.toXML())
            .join('\n        ');

        return `<khand index="${this.index}">
        ${matrasXML}
      </khand>`;
    }

    addMatra(matra: IMatra): void {
        this.matras.push(matra);
    }

    getMatras(): IMatra[] {
        return this.matras;
    }
}
