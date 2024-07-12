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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSalt = exports.SchemaIn = exports.SchemaUSer = void 0;
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.SchemaUSer = joi_1.default.object({
    username: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .required()
        .pattern(RegExp('^[A-Za-z0-9-_@]+$'))
        .max(18),
    nombre: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .required()
        .pattern(RegExp('^[A-Za-z0-9]+$'))
        .max(18),
    apellido: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .required()
        .pattern(RegExp('^[A-Za-z0-9]+$'))
        .max(18),
    password: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .pattern(RegExp('^[A-Za-z0-9-_+.]+$'))
        .required()
        .max(18)
});
exports.SchemaIn = joi_1.default.object({
    username: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .required()
        .pattern(RegExp('^[A-Za-z0-9-_@]+$'))
        .max(18),
    password: joi_1.default.string()
        .trim()
        .normalize()
        .min(3)
        .pattern(RegExp('^[A-Za-z0-9-_+.]+$'))
        .required()
        .max(18)
});
const generateSalt = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.genSaltSync(5);
});
exports.generateSalt = generateSalt;
