# streamToBuffer

## description

A module that can asynchronously convert a Stream to a Buffer.

## Usage

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
