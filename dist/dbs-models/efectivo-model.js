"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaEfectivo = void 0;
const sequelize_1 = require("sequelize");
const connect_mysql_1 = require("./connect-mysql");
exports.SchemaEfectivo = connect_mysql_1.MysqlConnect.define('efectivo', {
    id_efectivo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
    },
    codcede: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nomcede: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    efectivo: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: true,
    deletedAt: true,
    updatedAt: true
});
