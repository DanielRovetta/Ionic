export class Pessoa {
    private nome: string;
    private valorConta: number = 0;

    constructor(nome: string, valorConta: number = 0) {
        this.nome = nome;
        this.valorConta = valorConta;
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