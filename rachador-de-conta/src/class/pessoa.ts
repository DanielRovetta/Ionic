export class Pessoa {
    private id: number;
    private nome: string;
    private valorConta: number = 0;

    constructor(id: number, nome: string, valorConta: number = 0) {
        this.id = id;
        this.nome = nome;
        this.valorConta = valorConta;
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getValorConta() {
        return this.valorConta;
    }

    setValorConta(valorConta: number) {
        this.valorConta = valorConta;
    }
}