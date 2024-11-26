"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
var node_https_1 = require("node:https");
var semver_1 = require("semver");
var registry_js_1 = require("./registry.js");
var getVersion = function (packageManager_1, packageName_1) {
    var args_1 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args_1[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([packageManager_1, packageName_1], args_1, true), void 0, function (packageManager, packageName, tag, retries) {
        var registry, infoUrl, getVersionInfo, _loop_1, times, state_1;
        if (tag === void 0) { tag = 'auto'; }
        if (retries === void 0) { retries = 3; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    registry = (0, registry_js_1.getRegistry)(packageManager);
                    infoUrl = "".concat(registry, "-/package/").concat(packageName, "/dist-tags");
                    getVersionInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    (0, node_https_1.get)(infoUrl, function (res) {
                                        if (res.statusCode === 200) {
                                            var body_1 = '';
                                            res.on('data', function (data) {
                                                body_1 += data;
                                            });
                                            res.on('end', function () {
                                                resolve(JSON.parse(body_1));
                                            });
                                        }
                                        else {
                                            reject(new Error('Failed to get version info'));
                                        }
                                    }).on('error', reject);
                                })];
                        });
                    }); };
                    _loop_1 = function (times) {
                        var versionInfo, next, latest;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, getVersionInfo().catch(function () {
                                        // eslint-disable-next-line no-console
                                        console.log("Get ".concat(packageName, " version failed, [").concat(times, "/").concat(retries, "]"));
                                    })];
                                case 1:
                                    versionInfo = _b.sent();
                                    if (versionInfo) {
                                        next = versionInfo.next, latest = versionInfo.latest;
                                        return [2 /*return*/, { value: tag === 'latest'
                                                    ? latest
                                                    : tag === 'next'
                                                        ? next
                                                        : next && semver_1.default.gt(next, latest)
                                                            ? next
                                                            : latest }];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    times = 1;
                    _a.label = 1;
                case 1:
                    if (!(times <= retries)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(times)];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _a.label = 3;
                case 3:
                    times++;
                    return [3 /*break*/, 1];
                case 4: throw new Error("Failed to get ".concat(packageName, " version!\n Can not get version info from ").concat(infoUrl));
            }
        });
    });
};
exports.getVersion = getVersion;
