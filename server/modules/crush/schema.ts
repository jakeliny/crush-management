import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    apelido: {type: String, unique: true, required: true},
    whatsapp: {type: String, unique: true, required: true},
    observacoes: {type: String, required: true},
    comoconheceu: {type: String, required: true},
    idade: {type: String, unique: true, required: true},
    altura: {type: String, unique: true, required: true},
    local: {type: String, required: true},
    foto: {type: String, required: true},
    nota: {type: String, required: true},
    notaresponsabilidade: {type: String, required: true},
    notaatitude: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default CrushSchema
