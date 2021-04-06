"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamToBuffer = void 0;
function streamToBuffer(input) {
  return new Promise((resolve, reject) => {
    if (!input.readable || input.destroyed || input.readableEnded)
      return reject(-1);
    if (input.isPaused())
      input.resume();
    let buffers = [];
    input.on('data', (chunk) => {
      buffers.push(Buffer.from(chunk));
    });
    input.on('end', () => {
      let length = 0;
      buffers.forEach(v => {
        length += v.length;
      });
      let buffer = Buffer.concat(buffers, length);
      resolve(buffer);
    });
    input.on('error', (error) => {
       reject(error);
    });
  });
}
exports.streamToBuffer = streamToBuffer;
