"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DataBase = /** @class */ (function () {
    function DataBase() {
    }
    DataBase.prototype.createConnection = function () {
        //dentro do heroku meu node_env é production
        if (process.env.NODE_ENV == 'production') {
            mongoose.connect(process.env.MONGODB_URI);
            this.logger(process.env.MONGODB_URI);
        }
        else {
            mongoose.connect(process.env.DB_URI);
            this.logger(process.env.DB_URI);
        }
    };
    DataBase.prototype.logger = function (uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', function () {
            return console.log('Mongoose está conectado ao ' + uri);
        });
        this.DB_CONNECTION.on('error', function (error) {
            return console.error.bind(console, 'Erro na conexão: ' + error);
        });
        this.DB_CONNECTION.on('disconnected', function () {
            return console.log('Mongoose está desconectado do ' + uri);
        });
    };
    DataBase.prototype.closeConnection = function (message, callback) {
        this.DB_CONNECTION.close(function () {
            console.log('Mongoose foi desconectado pelo: ' + message);
            callback();
        });
    };
    return DataBase;
}());
exports.default = DataBase;
