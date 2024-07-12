"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const config_1 = require("./config/config");
const express_server_1 = require("./config/express-server");
if (cluster_1.default.isPrimary) {
    const worker = new config_1.ClustWorker(cluster_1.default);
    for (let i = 0; i < os_1.default.cpus().length; i++) {
        worker.on();
    }
    cluster_1.default.on('exit', (clu) => {
        worker.off();
        console.log(`CLUSTER MURIENDO ${clu.id}`);
    });
}
else {
    const server = new express_server_1.Server();
    server.serverrun();
}
