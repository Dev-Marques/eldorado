"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routers_1 = __importDefault(require("./routers"));
exports.default = (function (app) {
    var router = (0, routers_1.default)();
    app.use('/api', router);
});
