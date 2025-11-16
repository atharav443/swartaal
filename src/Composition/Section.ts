import { Line } from './Line';

export class Section {
    private name: string;
    private startmatra: number;
    private lines: Line[];

    constructor(name: string, startmatra: number, lines: Line[]) {
        this.name = name;
        this.startmatra = startmatra;
        this.lines = lines;
    }

    toXML(): string {
        const lineXML = this.lines
            .map((line) => line.toXML)
            .join('\n     ');

        return `<section name="${this.name}" startmatra="${this.startmatra}">
        ${lineXML}
        </section>`;
    }

    addLine(line: Line): void {
        this.lines.push(line);
    }

    getLine(): Line[] {
        return this.lines;
    }



}