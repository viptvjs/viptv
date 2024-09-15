import { get } from 'node:https';
import semver from 'semver';
import { getRegistry } from './registry.js';
export const getVersion = async (packageManager, packageName, tag = 'auto', retries = 3) => {
    const registry = getRegistry(packageManager);
    const infoUrl = `${registry}-/package/${packageName}/dist-tags`;
    const getVersionInfo = async () => new Promise((resolve, reject) => {
        get(infoUrl, (res) => {
            if (res.statusCode === 200) {
                let body = '';
                res.on('data', (data) => {
                    body += data;
                });
                res.on('end', () => {
                    resolve(JSON.parse(body));
                });
            }
            else {
                reject(new Error('Failed to get version info'));
            }
        }).on('error', reject);
    });
    for (let times = 1; times <= retries; times++) {
        const versionInfo = await getVersionInfo().catch(() => {
            // eslint-disable-next-line no-console
            console.log(`Get ${packageName} version failed, [${times}/${retries}]`);
        });
        if (versionInfo) {
            const { next, latest } = versionInfo;
            return tag === 'latest'
                ? latest
                : tag === 'next'
                    ? next
                    : next && semver.gt(next, latest)
                        ? next
                        : latest;
        }
    }
    throw new Error(`Failed to get ${packageName} version!\n Can not get version info from ${infoUrl}`);
};
