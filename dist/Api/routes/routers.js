"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_controller_1 = require("../controllers/category.controller");
var device_controller_1 = require("../controllers/device.controller");
var router = (0, express_1.Router)();
exports.default = (function () {
    var categoryContoller = new category_controller_1.CategoryController();
    var deviceController = new device_controller_1.DeviceController();
    router.post("/device", deviceController.create);
    router.get("/device", deviceController.list);
    router.delete("/device/:id", deviceController.destroy);
    router.post("/category", categoryContoller.create);
    router.get("/category", categoryContoller.list);
    router.delete("/category/:id", categoryContoller.destroy);
    return router;
});
