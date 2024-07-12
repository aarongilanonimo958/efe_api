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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const efectivo_model_1 = require("../dbs-models/efectivo-model");
const routes_1 = require("../routes");
const user_model_1 = require("../dbs-models/user-model");
class Server {
    constructor() {
        var _a;
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4200;
        this.app = (0, express_1.default)();
        this.http = http_1.default;
        this.settings();
        this.routes();
        this.dbConnect();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield efectivo_model_1.SchemaEfectivo.sync();
            yield user_model_1.userModel.sync();
        });
    }
    routes() {
        this.app.use('/api_efec', routes_1.efectivoRouter);
        this.app.use('', (req, res) => {
            return res.status(404).json({
                inf: 'Pagina no existente en api',
                data: null
            });
        });
    }
    settings() {
        this.app.disabled('x-powered-by');
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('combined'));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)({
            credentials: true,
            methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
            optionsSuccessStatus: 200,
            allowedHeaders: [
                'Accept',
                'Origin',
                'Authorization',
                'X-Request-With',
                'X-Custom-Headers',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin'
            ],
            exposedHeaders: [
                'Accept',
                'Origin',
                'Authorization',
                'X-Request-With',
                'X-Custom-Headers',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin'
            ]
        }));
    }
    serverrun() {
        let server = this.http.createServer({
            connectionsCheckingInterval: 15000,
            keepAlive: true,
            requestTimeout: 25000,
            keepAliveTimeout: 3500
        }, this.app).listen(this.port, () => {
            console.log(`SERVER RUN ON PORT ${this.port}`);
        });
    }
}
exports.Server = Server;
