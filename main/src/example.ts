import { Composition } from './core/Composition';
import { Metadata } from './core/Metadata';
import { Section } from './core/Section';
import { Line } from './core/Line';
import { Khand } from './core/Khand';
import { Matra } from './core/Matra';
import { Swar } from './core/Swar';
import { Lyric } from './core/Lyric';
import { Taal } from './types/Taal';
import * as fs from 'fs';
import * as path from 'path';

// Create basic components
const swar1 = new Swar('Sa', 1, { octave: 'middle' });
const lyric1 = new Lyric('सा');
const matra1 = new Matra('1', 'X', swar1, lyric1);

const swar2 = new Swar('Re', 1, { octave: 'middle' });
const lyric2 = new Lyric('रे');
const matra2 = new Matra('2', '1', swar2, lyric2);

const swar3 = new Swar('Ga', 1, { octave: 'middle' });
const lyric3 = new Lyric('ग');
const matra3 = new Matra('3', '2', swar3, lyric3);

// Create Khand with matras
const khand = new Khand('1', [matra1, matra2, matra3]);

// Create Line with khand (lineNumber must be number)
const line = new Line(1, [khand]);

// Create Section with line (needs name, startmatra, and lines array)
const section = new Section('स्थायी', 1, [line]);

// Create Taal
const taal = new Taal('teentaal');

// Create Metadata (needs title, raag, and taal)
const metadata = new Metadata('Raga Yaman', 'Yaman', taal);

// Create full Composition
const composition = new Composition(metadata, [section]);

// Generate XML
const xmlContent = composition.toXML();

// Write to generated.xml in the root directory
const outputPath = path.join(__dirname, '../../generated.xml');
fs.writeFileSync(outputPath, xmlContent, 'utf-8');

console.log('='.repeat(60));
console.log('HINDUSTANI COMPOSITION XML');
console.log('='.repeat(60));
console.log(xmlContent);
console.log('='.repeat(60));
console.log(`\n✅ XML written to: ${outputPath}`);