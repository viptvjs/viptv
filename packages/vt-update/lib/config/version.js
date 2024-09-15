import { createRequire } from 'node:module';
export const VERSION = createRequire(import.meta.url)('vt-update/package.json').version;
