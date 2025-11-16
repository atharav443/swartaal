# Hindustani Notation

Generate Hindustani classical music notation in XML format.

## Installation
```bash
npm install hindustani-notation
```

## Usage
```typescript
import { createComposition } from 'hindustani-notation';

const notation = createComposition()
  .setTitle('Raga Yaman')
  .setRaga('Kalyan')
  .setTala('Teentaal', 16)
  .addSection('स्थायी')
    .addLine('X')
      .addNote('सा')
      .addNote('रे')
      .addNote('ग')
      .endLine()
    .endSection()
  .toXML();

console.log(notation);
```

## API Documentation

[Add your API docs here]

## License

MIT