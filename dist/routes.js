"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.efectivoRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const middlewares_1 = require("./middlewares");
exports.efectivoRouter = (0, express_1.Router)()
    .get('/sayhi', controller_1.sayhiController)
    .get('/all', controller_1.get_all)
    .post('/get-date', controller_1.get_dateController)
    .post('/get-cede', controller_1.get_cedeController)
    .post('/create-user', middlewares_1.ValidateUSer, controller_1.createController)
    .post('/in', middlewares_1.ValidaIn, controller_1.inController);
