"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var CrushSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    apelido: { type: String, unique: true, required: true },
    whatsapp: { type: String, unique: true, required: true },
    observacoes: { type: String, required: true },
    foto: { type: String, required: true },
    nota: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = CrushSchema;
