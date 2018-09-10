import Crush from './repository';

class CrushController {
    constructor() { }

    getAll() {
        return Crush.find({});
    }

    getByID(id) {
        return Crush.findById(id);
    }

    create(crush) {
        return Crush.create(crush);
    }

    update(id, crush) {
        const updateCrush = {
            nome: crush.nome,
            apelido: crush.apelido,
            whatsapp: crush.whatsapp,
            observacoes: crush.observacoes,
            foto: crush.foto,
            nota: crush.nota
        }
        return Crush.findByIdAndUpdate(id, updateCrush);
    }

    delete(id) {
        return Crush.remove(id);
    }
}

export default new CrushController();
