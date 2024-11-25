"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = void 0;
var node_module_1 = require("node:module");
exports.VERSION = (0, node_module_1.createRequire)(import.meta.url)('vp-update/package.json').version;
