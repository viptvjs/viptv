import { createRequire } from 'node:module'

export const { version } = createRequire(import.meta.url)(
  'vt-update/package.json',
) as { version: string }