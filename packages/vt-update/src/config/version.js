import { createRequire } from 'node:module';
export const VERSION = createRequire(import.meta.url)('vp-update/package.json').version;
//# sourceMappingURL=version.js.map