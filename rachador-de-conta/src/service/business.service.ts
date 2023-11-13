import { Injectable } from '@angular/core';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';

@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  private listaItens = new Array<Item>;
  private listaPessoas = new Array<Pessoa>;

  private idItem = 1;
  private idPessoa = 1;


  constructor() {

  }

  insertPessoa(pessoa: Pessoa) {
    pessoa.setId(this.idPessoa);
    this.idPessoa++;
    this.listaPessoas.push(pessoa);
  }

  insertItem(item: Item) {
    item.setId(this.idItem);
    this.idItem++;
    this.listaItens.push(item);
  }

  getListaItem(): Array<Item> {
    return this.listaItens;
  }

  getListaPessoa(): Array<Pessoa> {
    return this.listaPessoas;
  }


}