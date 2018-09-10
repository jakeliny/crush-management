"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.default.app.listen(4200, function () { return console.log('servidor está rodando na porta 4200'); });
process.once('SIGUSR2', function () { return app_1.default.closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return app_1.default.closeDataBaseConnection('execução foi interrompida', function () { return process.exit(0); }); });
