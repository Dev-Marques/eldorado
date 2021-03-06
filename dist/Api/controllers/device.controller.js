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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.DeviceController = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var Category_1 = require("../../entity/Category");
var Device_1 = require("../../entity/Device");
var DeviceController = /** @class */ (function () {
    function DeviceController() {
    }
    DeviceController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, category, color, partNumber, deviceRepository, categoryRepository, device, deviceCategory, errors, deviceCreate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, category = _a.category, color = _a.color, partNumber = _a.partNumber;
                        deviceRepository = (0, typeorm_1.getRepository)(Device_1.Device);
                        categoryRepository = (0, typeorm_1.getRepository)(Category_1.Category);
                        device = new Device_1.Device();
                        return [4 /*yield*/, categoryRepository.findOne({ where: { id: category } })];
                    case 1:
                        deviceCategory = _b.sent();
                        if (!deviceCategory) return [3 /*break*/, 4];
                        device.category = deviceCategory;
                        device.color = color;
                        device.partNumber = partNumber;
                        return [4 /*yield*/, (0, class_validator_1.validate)(device)];
                    case 2:
                        errors = _b.sent();
                        if (errors.length > 0) {
                            return [2 /*return*/, res.status(400).send(errors)];
                        }
                        return [4 /*yield*/, deviceRepository.save(device)];
                    case 3:
                        deviceCreate = _b.sent();
                        return [2 /*return*/, res.status(201).send(deviceCreate)];
                    case 4: return [2 /*return*/, res.status(422).send({ error: 'Invalid category' })];
                }
            });
        });
    };
    DeviceController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Device_1.Device).find()];
                    case 1:
                        device = _a.sent();
                        return [2 /*return*/, res.status(200).send(device)];
                }
            });
        });
    };
    DeviceController.prototype.destroy = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceRepository, device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deviceRepository = (0, typeorm_1.getRepository)(Device_1.Device);
                        return [4 /*yield*/, deviceRepository.findOne({ where: { id: req.params.id } })];
                    case 1:
                        device = _a.sent();
                        if (device === undefined) {
                            return [2 /*return*/, res.status(404).send({ error: 'Device not found' })];
                        }
                        deviceRepository.delete(req.params.id);
                        return [2 /*return*/, res.sendStatus(204)];
                }
            });
        });
    };
    return DeviceController;
}());
exports.DeviceController = DeviceController;
