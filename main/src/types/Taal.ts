import { TaalTypes, TaalInfo as ITaalInfo, IXMLSerializable } from './types';
import { TAAL_CONFIG } from './TaalConfig';

export class Taal implements IXMLSerializable {
    private name: TaalTypes;
    private info: ITaalInfo;

    constructor(taalType: TaalTypes) {
        this.name = taalType;
        this.info = TAAL_CONFIG[taalType];
    }

    getTaalName(): TaalTypes {
        return this.name;
    }

    getTotalMatras(): number {
        return this.info.totalmatras;
    }

    getKhands(): number {
        return this.info.khands;
    }

    getKhandMatras(): number[] {
        return this.info.khandmatras;
    }

    getMatrasInKhand(khandIndex: number): number {
        if (khandIndex < 0 || khandIndex >= this.info.khandmatras.length) {
            throw new Error(
                `Invalid khand index: ${khandIndex}. Valid range: 0-${this.info.khandmatras.length - 1}`
            );
        }
        return this.info.khandmatras[khandIndex];
    }

    toXML(): string {
        return `<taal name="${this.name}" total-matras="${this.info.totalmatras}" khands="${this.info.khands}"/>`;
    }
}