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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidaIn = exports.ValidateUSer = void 0;
const valid_helpers_1 = require("./valid-helpers");
const ValidateUSer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = yield valid_helpers_1.SchemaUSer.validateAsync(req.body);
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.ValidateUSer = ValidateUSer;
const ValidaIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const error = yield valid_helpers_1.SchemaUSer.schema(req.body);
        return next();
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.ValidaIn = ValidaIn;
