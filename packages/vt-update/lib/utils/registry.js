"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTaobaoRegistry = exports.getRegistry = void 0;
/* eslint-disable no-console */
var node_child_process_1 = require("node:child_process");
var NPM_MIRROR_REGISTRY = 'https://registry.npmmirror.com/';
var getRegistry = function (packageManager) {
    if (packageManager === 'yarn' &&
        !(0, node_child_process_1.spawnSync)("".concat(packageManager, " --version"), {
            shell: true,
        })
            .stdout.toString()
            .startsWith('1'))
        return (0, node_child_process_1.spawnSync)("".concat(packageManager, " config get npmRegistryServer"), {
            shell: true,
        })
            .stdout.toString()
            .trim()
            .replace(/\/?$/, '/');
    if (packageManager === 'bun' &&
        !(0, node_child_process_1.spawnSync)("".concat(packageManager, " --version"), {
            shell: true,
        }).status) {
        console.warn('bun does not support get registry at the time, using npm global registry instead');
        return (0, node_child_process_1.spawnSync)(
        // TODO: wait for bun to support get registry config
        "npm config get registry", { shell: true })
            .stdout.toString()
            .trim()
            .replace(/\/?$/, '/');
    }
    return (0, node_child_process_1.spawnSync)("".concat(packageManager, " config get registry"), {
        shell: true,
    })
        .stdout.toString()
        .trim()
        .replace(/\/?$/, '/');
};
exports.getRegistry = getRegistry;
var checkTaobaoRegistry = function (packageManager) {
    var userRegistry = (0, exports.getRegistry)(packageManager);
    if (/https:\/\/registry\.npm\.taobao\.org\/?/.test(userRegistry)) {
        console.error('npm.taobao.org is no longer available, resetting it to npmmirror.com');
        if (packageManager === 'yarn') {
            (0, node_child_process_1.spawnSync)("".concat(packageManager, " config set npmRegistryServer  ").concat(NPM_MIRROR_REGISTRY), { shell: true });
        }
        else if (packageManager === 'bun') {
            (0, node_child_process_1.spawnSync)("npm config set registry ".concat(NPM_MIRROR_REGISTRY), {
                shell: true,
            });
        }
        else {
            (0, node_child_process_1.spawnSync)("".concat(packageManager, " config set registry ").concat(NPM_MIRROR_REGISTRY), { shell: true });
        }
    }
};
exports.checkTaobaoRegistry = checkTaobaoRegistry;
