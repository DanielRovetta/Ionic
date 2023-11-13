export class Item {
    private id: number;
    private descricao: string;
    private valor: number;

    constructor(id: number, descricao: string, valor: number) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
    }
    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(descricao: string) {
        this.descricao = descricao;
    }

    getValor() {
        return this.valor;
    }

    setValor(valor: number) {
        this.valor = valor;
    }
}