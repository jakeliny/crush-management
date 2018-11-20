"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var httpStatus = require("http-status");
var sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
var CrushRoutes = /** @class */ (function () {
    function CrushRoutes() {
    }
    CrushRoutes.prototype.getAll = function (req, res) {
        controller_1.default
            .getAll()
            .then(function (crushs) { return sendResponse(res, httpStatus.OK, crushs); })
            .catch(function (err) { return console.error.bind(console, 'Erro: ' + err); });
    };
    CrushRoutes.prototype.getByID = function (req, res) {
        var id = { _id: req.params.id };
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Crush não encontrado');
        }
        controller_1.default
            .getByID(id)
            .then(function (crush) { return sendResponse(res, httpStatus.OK, crush); })
            .catch(function (err) { return console.error.bind(console, 'Erro: ' + err); });
    };
    CrushRoutes.prototype.create = function (req, res) {
        var crush = req.body;
        controller_1.default
            .create(crush)
            .then(function (crush) { return sendResponse(res, httpStatus.CREATED, "Crush criado com amor!"); })
            .catch(function (err) { return console.error.bind(console, 'Erro: ' + err); });
    };
    CrushRoutes.prototype.update = function (req, res) {
        var id = { _id: req.params.id };
        var crush = req.body;
        controller_1.default
            .update(id, crush)
            .then(function (crush) { return sendResponse(res, httpStatus.OK, "Crush alterado!"); })
            .catch(function (err) { return console.error.bind(console, 'Erro: ' + err); });
    };
    CrushRoutes.prototype.delete = function (req, res) {
        var id = { _id: req.params.id };
        controller_1.default
            .delete(id)
            .then(function (result) { return sendResponse(res, httpStatus.OK, result); })
            .catch(function (err) { return console.error.bind(console, 'Erro: ' + err); });
    };
    return CrushRoutes;
}());
exports.default = new CrushRoutes();
