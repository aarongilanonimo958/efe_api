"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const connect_mysql_1 = require("./connect-mysql");
exports.userModel = connect_mysql_1.MysqlConnect.define('user', {
    id_username: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    deletedAt: true,
    updatedAt: true
});
