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
exports.inController = exports.createController = exports.get_cedeController = exports.get_dateController = exports.get_all = exports.sayhiController = void 0;
const efectivo_model_1 = require("./dbs-models/efectivo-model");
const valid_helpers_1 = require("./valid-helpers");
const user_model_1 = require("./dbs-models/user-model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const sayhiController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            info: 'Holaa',
            data: null
        });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.sayhiController = sayhiController;
const get_all = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield efectivo_model_1.SchemaEfectivo.findAll();
        return res.status(200).json(data);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.get_all = get_all;
const get_dateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.body;
        console.log(date);
        const data = yield efectivo_model_1.SchemaEfectivo.findAll({
            where: {
                fecha: date
            }
        });
        return res.status(200).json(data);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.get_dateController = get_dateController;
const get_cedeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, cod } = req.body;
        const data = yield efectivo_model_1.SchemaEfectivo.findAll({
            where: {
                fecha: date,
                codcede: "0101",
            }
        });
        return res.status(200).json(data);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.get_cedeController = get_cedeController;
const createController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, nombre, apellido, password } = req.body;
        const is_user = yield user_model_1.userModel.findOne({
            where: {
                username
            }
        });
        if (is_user)
            throw ({
                info: 'usuario existente',
                data: username
            });
        const salt = yield (0, valid_helpers_1.generateSalt)(password);
        const newPassword = yield bcrypt_1.default.hashSync(password, salt);
        const save = yield user_model_1.userModel.create({
            username,
            nombre,
            apellido,
            password: newPassword
        });
        yield save.save();
        return res.status(200).json({
            info: 'Usuario registrado',
            data: save
        });
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.createController = createController;
const inController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const is_user = yield user_model_1.userModel.findOne({
            where: {
                username
            }
        });
        if (!is_user)
            throw ({
                info: 'No existe el usuario',
                data: username
            });
        if (!(yield bcrypt_1.default.compareSync(password, is_user.getDataValue('password'))))
            throw ({
                info: 'Algun dato es incorrecto',
                data: username
            });
        return res.json(is_user);
    }
    catch (error) {
        return res.status(400).json(error);
    }
});
exports.inController = inController;
