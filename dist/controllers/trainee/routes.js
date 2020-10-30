"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("./Controller");
const traineeRouter = express_1.Router();
traineeRouter.route('/')
    .get(Controller_1.default.get)
    .post(Controller_1.default.create)
    .put(Controller_1.default.update)
    .delete(Controller_1.default.delete);
exports.default = traineeRouter;
//# sourceMappingURL=routes.js.map