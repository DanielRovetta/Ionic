export class Item {
    private descricao: string;
    private valor: number;

    constructor(descricao: string, valor: number) {
        this.descricao = descricao;
        this.valor = valor;
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