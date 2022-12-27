declare function typedarrayToBuffer(arr: ArrayBufferView): Buffer;

export = typedarrayToBuffer;

export function matches(mimetype: string, buffer: buffer): boolean;

export function guess(buffer: buffer): string;
