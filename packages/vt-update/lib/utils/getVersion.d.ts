import type { PackageManager } from './packageManager.js';
export declare const getVersion: (packageManager: PackageManager, packageName: string, tag?: "auto" | "latest" | "next", retries?: number) => Promise<string>;
