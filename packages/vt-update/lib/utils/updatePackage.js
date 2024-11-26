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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePackages = void 0;
/* eslint-disable no-console */
var index_js_1 = require("../config/index.js");
var getVersion_js_1 = require("./getVersion.js");
var updatePackages = function (packageManager, dependencies) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(Object.keys(dependencies).map(function (dependency) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    return __generator(this, function (_o) {
                        switch (_o.label) {
                            case 0:
                                if (!index_js_1.REMOVED_PACKAGES.includes(dependency)) return [3 /*break*/, 1];
                                console.error("Removing \"".concat(dependency, "\" from your dependencies, as it's no longer maintained."));
                                delete dependencies[dependency];
                                return [3 /*break*/, 11];
                            case 1:
                                if (!index_js_1.DEPRECATED_PACKAGES.includes(dependency)) return [3 /*break*/, 3];
                                console.error("\"".concat(dependency, "\"is deprecated, please remove it from your dependencies and import \"").concat(dependency.substring(1), "\" from \"vuepress\" directly."));
                                _a = dependencies;
                                _b = dependency;
                                _c = "^".concat;
                                return [4 /*yield*/, (0, getVersion_js_1.getVersion)(packageManager, dependency, 'next')];
                            case 2:
                                _a[_b] = _c.apply("^", [_o.sent()]);
                                return [3 /*break*/, 11];
                            case 3:
                                if (!index_js_1.VUE_RELATED_PACKAGES.includes(dependency)) return [3 /*break*/, 5];
                                _d = dependencies;
                                _e = dependency;
                                _f = "^".concat;
                                return [4 /*yield*/, (0, getVersion_js_1.getVersion)(packageManager, dependency, 'latest')];
                            case 4:
                                _d[_e] = _f.apply("^", [_o.sent()]);
                                return [3 /*break*/, 11];
                            case 5:
                                if (!index_js_1.OFFICIAL_PACKAGES.includes(dependency)) return [3 /*break*/, 7];
                                _g = dependencies;
                                _h = dependency;
                                return [4 /*yield*/, (0, getVersion_js_1.getVersion)(packageManager, dependency, 'next')];
                            case 6:
                                _g[_h] = _o.sent();
                                return [3 /*break*/, 11];
                            case 7:
                                if (!index_js_1.OFFICIAL_PLUGINS_AND_THEMES_REGEXP.test(dependency)) return [3 /*break*/, 9];
                                _j = dependencies;
                                _k = dependency;
                                return [4 /*yield*/, (0, getVersion_js_1.getVersion)(packageManager, dependency, 'next')];
                            case 8:
                                _j[_k] = _o.sent();
                                return [3 /*break*/, 11];
                            case 9:
                                if (!(index_js_1.THIRD_PARTY_PLUGINS.test(dependency) ||
                                    index_js_1.THIRD_PARTY_THEMES.test(dependency))) return [3 /*break*/, 11];
                                _l = dependencies;
                                _m = dependency;
                                return [4 /*yield*/, (0, getVersion_js_1.getVersion)(packageManager, dependency, 'auto')];
                            case 10:
                                _l[_m] = _o.sent();
                                _o.label = 11;
                            case 11: return [2 /*return*/];
                        }
                    });
                }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updatePackages = updatePackages;
