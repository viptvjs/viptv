"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageManager = exports.getTypeofLockFile = exports.getPackageManagerSetting = exports.isPackageManagerInstalled = void 0;
var node_child_process_1 = require("node:child_process");
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var globalCache = new Map();
var localCache = new Map();
var PACKAGE_CONFIG = 'package.json';
var NPM_LOCK = 'package-lock.json';
var YARN_LOCK = 'yarn.lock';
var PNPM_LOCK = 'pnpm-lock.yaml';
var BUN_LOCK = 'bun.lockb';
var isInstalled = function (packageManager) {
    try {
        var bin = packageManager === 'yarn1' ? 'yarn' : packageManager;
        var result = (0, node_child_process_1.spawnSync)("".concat(bin, " --version"), {
            shell: true,
        });
        if (packageManager === 'yarn1')
            return result.stdout.toString().startsWith('1');
        return result.status === 0;
    }
    catch (_a) {
        return false;
    }
};
/**
 * Check if a package manager is installed globally.
 *
 * @param packageManager package manager
 */
var isPackageManagerInstalled = function (packageManager) {
    var key = "global:".concat(packageManager);
    var status = globalCache.get(key);
    if (status !== undefined)
        return status;
    if (isInstalled(packageManager)) {
        globalCache.set(key, true);
        return true;
    }
    return false;
};
exports.isPackageManagerInstalled = isPackageManagerInstalled;
/**
 * Get package manager setting in package.json
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
var getPackageManagerSetting = function (cwd, deep) {
    if (cwd === void 0) { cwd = process.cwd(); }
    if (deep === void 0) { deep = true; }
    var key = "package:".concat(cwd);
    var status = localCache.get(key);
    if (status !== undefined)
        return status;
    if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, PACKAGE_CONFIG))) {
        var packageManagerSettings = JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(cwd, PACKAGE_CONFIG), 'utf-8')).packageManager;
        if (packageManagerSettings) {
            var packageManager = packageManagerSettings.split('@')[0];
            localCache.set(key, packageManager);
            return packageManager;
        }
    }
    if (deep) {
        var dir = cwd;
        while (dir !== (0, node_path_1.dirname)(dir)) {
            dir = (0, node_path_1.dirname)(dir);
            if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, PACKAGE_CONFIG))) {
                var packageManagerSettings = JSON.parse((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(cwd, PACKAGE_CONFIG), 'utf-8')).packageManager;
                if (packageManagerSettings) {
                    var packageManager = packageManagerSettings.split('@')[0];
                    localCache.set(key, packageManager);
                    return packageManager;
                }
            }
        }
    }
    return null;
};
exports.getPackageManagerSetting = getPackageManagerSetting;
/**
 * Get the type of lock file.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of lock file
 */
var getTypeofLockFile = function (cwd, deep) {
    if (cwd === void 0) { cwd = process.cwd(); }
    if (deep === void 0) { deep = true; }
    var key = "local:".concat(cwd);
    var status = localCache.get(key);
    if (status !== undefined)
        return status;
    if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, PNPM_LOCK))) {
        localCache.set(key, 'pnpm');
        return 'pnpm';
    }
    if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, YARN_LOCK))) {
        var packageManager = (0, node_fs_1.readFileSync)((0, node_path_1.resolve)(cwd, YARN_LOCK), {
            encoding: 'utf-8',
        }).includes('yarn lockfile v1')
            ? 'yarn1'
            : 'yarn';
        localCache.set(key, packageManager);
        return packageManager;
    }
    if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, BUN_LOCK))) {
        localCache.set(key, 'bun');
        return 'bun';
    }
    if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(cwd, NPM_LOCK))) {
        localCache.set(key, 'npm');
        return 'npm';
    }
    if (deep) {
        var dir = cwd;
        while (dir !== (0, node_path_1.dirname)(dir)) {
            dir = (0, node_path_1.dirname)(dir);
            if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(dir, PNPM_LOCK))) {
                localCache.set(key, 'pnpm');
                return 'pnpm';
            }
            if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(dir, YARN_LOCK))) {
                var packageManager = (0, node_fs_1.readFileSync)((0, node_path_1.resolve)(dir, YARN_LOCK), {
                    encoding: 'utf-8',
                }).includes('yarn lockfile v1')
                    ? 'yarn1'
                    : 'yarn';
                localCache.set(key, packageManager);
                return packageManager;
            }
            if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(dir, BUN_LOCK))) {
                localCache.set(key, 'bun');
                return 'bun';
            }
            if ((0, node_fs_1.existsSync)((0, node_path_1.resolve)(dir, NPM_LOCK))) {
                localCache.set(key, 'npm');
                return 'npm';
            }
        }
    }
    return null;
};
exports.getTypeofLockFile = getTypeofLockFile;
/**
 * Detect the package manager used in the current project.
 *
 * @param cwd current working directory
 * @param deep whether to search in parent directories
 * @returns the type of package manager
 */
var getPackageManager = function (cwd, deep) {
    if (cwd === void 0) { cwd = process.cwd(); }
    if (deep === void 0) { deep = true; }
    return (0, exports.getPackageManagerSetting)(cwd, deep) ||
        (0, exports.getTypeofLockFile)(cwd, deep) ||
        ((0, exports.isPackageManagerInstalled)('pnpm')
            ? 'pnpm'
            : (0, exports.isPackageManagerInstalled)('yarn')
                ? 'yarn'
                : (0, exports.isPackageManagerInstalled)('bun')
                    ? 'bun'
                    : 'npm');
};
exports.getPackageManager = getPackageManager;
