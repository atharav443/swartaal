import { Khand } from "./Khand";

export class Line {
    private lineNumber: number;
    private khands: Khand[];

    constructor(lineNumber: number, khands: Khand[]) {
        this.lineNumber = lineNumber;
        this.khands = khands;
    }

    toXML(): string {
        const khandXML = this.khands
            .map((khand) => khand.toXML())
            .join('\n     ');

        return `<line number=${this.lineNumber}>
           ${khandXML}
        </line>`;
    }

    addKhand(khand: Khand): void {
        this.khands.push(khand);
    }

    getKhand(): Khand[] {
        return this.khands;
    }
}