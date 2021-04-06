# streamToBuffer

## description

A module that can asynchronously convert a Stream to a Buffer.

## Usage

TypeScript:
```ts
  import { streamToBuffer } from '@k239i/streamtobuffer';
  import * as fs from 'fs';
  const stream: any = fs.createReadStream('./bigUnnko.txt',{
    encoding: 'utf8',
    highWaterMark: 1
  });
  // async/await
  (async() => {
    const data: Buffer = await streamToBuffer(stream);
    console.log(String(data));
  })();
  streamToBuffer(stream)
    .then( data => console.log(String(data)) );
```

JavaScript:
```js
  const { streamToBuffer } = require('@k239i/streamtobuffer');
  const fs = require('fs');
  const stream = fs.createReadStream('./bigUnnko.txt',{
    encoding: 'utf8',
    highWaterMark: 1
  });
  // async/await
  (async() => {
    const data = await streamToBuffer(stream);
    console.log(String(data));
  })();
  streamToBuffer(stream)
    .then( data => console.log(String(data)) );
```
