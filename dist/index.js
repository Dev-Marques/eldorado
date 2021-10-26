"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./Api/routes"));
var typeorm_1 = require("typeorm");
var app = (0, express_1.default)();
var PORT = 3000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
(0, routes_1.default)(app);
(0, typeorm_1.createConnection)().then(function (_connection) {
    app.listen(PORT, function () {
        console.log("Running in port " + PORT);
    });
});
