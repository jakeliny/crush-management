"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var schema_1 = require("./schema");
exports.default = mongoose.model('Crush', schema_1.default);
