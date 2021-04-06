/// <reference types="node" />
import { Stream } from 'node:stream';
declare function streamToBuffer(input: Stream): Promise<Buffer>;
export { streamToBuffer };
