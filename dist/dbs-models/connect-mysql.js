"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConnect = void 0;
const sequelize_1 = require("sequelize");
exports.MysqlConnect = new sequelize_1.Sequelize(process.env.MYSQL_BDD || '', process.env.MYSQL_USER || '', process.env.MYSQL_PASS, {
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_BDD,
    username: process.env.MYSQL_USER,
    timezone: "-04:00",
    password: process.env.MYSQL_PASS,
    port: parseInt(process.env.MYSQL_PORT || '3306'),
    dialectOptions: {
        timezone: 'local',
        connectTimeout: 15000,
    },
});
