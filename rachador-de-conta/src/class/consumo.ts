import { Item } from "./item";
import { Pessoa } from "./pessoa";

export class Consumo {
    private id: number;
    private pessoa: Pessoa;
    private item: Item;
    private peso: number;

    constructor(id: number, pessoa: Pessoa, item: Item, peso: number) {
        this.id = id;
        this.peso = peso;
        this.pessoa = pessoa;
        this.item = item;
    }
    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getPeso() {
        return this.peso;
    }

    setPeso(peso: number) {
        this.peso = peso;
    }

    getPessoa(): Pessoa {
        return this.pessoa;
    }
    getItem(): Item {
        return this.item;
    }

    setPessoa(pessoa: Pessoa) {
        this.pessoa = pessoa;
    }
    setItem(item: Item) {
        this.item = item;
    }
}