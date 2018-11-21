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
            comoconheceu: crush.comoconheceu,
            idade: crush.idade,
            altura: crush.altura,
            local: crush.local,
            foto: crush.foto,
            nota: crush.nota, 
            notaresponsabilidade: crush.notaresponsabilidade,
            notaatitude: crush.notaatitude
        }
        return Crush.findByIdAndUpdate(id, updateCrush);
    }

    delete(id) {
        return Crush.remove(id);
    }
}

export default new CrushController();
