"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var db_1 = require("./config/db");
var routes_1 = require("./modules/crush/routes");
var dotenv = require("dotenv");
var App = /** @class */ (function () {
    function App() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.routes();
        this.database = new db_1.default();
        this.dataBaseConnection();
    }
    App.prototype.dataBaseConnection = function () {
        this.database.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.database.closeConnection(message, function () { return callback(); });
    };
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        this.app
            .route('/')
            .get(function (req, res) { return res.status(200).json({ message: 'Hello world!' }); });
        this.app.route('/api/crushs').get(routes_1.default.getAll);
        this.app.route('/api/crushs/:id').get(routes_1.default.getByID);
        this.app.route('/api/crushs').post(routes_1.default.create);
        this.app.route('/api/crushs/:id').put(routes_1.default.update);
        this.app.route('/api/crushs/:id').delete(routes_1.default.delete);
    };
    return App;
}());
exports.default = new App();
