"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
var CrushController = /** @class */ (function () {
    function CrushController() {
    }
    CrushController.prototype.getAll = function () {
        return repository_1.default.find({});
    };
    CrushController.prototype.getByID = function (id) {
        return repository_1.default.findById(id);
    };
    CrushController.prototype.create = function (crush) {
        return repository_1.default.create(crush);
    };
    CrushController.prototype.update = function (id, crush) {
        var updateCrush = {
            nome: crush.nome,
            apelido: crush.apelido,
            whatsapp: crush.whatsapp,
            observacoes: crush.observacoes,
            foto: crush.foto,
            nota: crush.nota
        };
        return repository_1.default.findByIdAndUpdate(id, updateCrush);
    };
    CrushController.prototype.delete = function (id) {
        return repository_1.default.remove(id);
    };
    return CrushController;
}());
exports.default = new CrushController();
