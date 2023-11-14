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

  deleteItem(id: number) {
    let aux = this.listaItens.find((item) => id === item.getId());
    if (aux) {
      var index = this.listaItens.indexOf(aux);
      this.listaItens.splice(index, 1);
    }
  }

  deletePessoa(id: number) {
    let aux = this.listaPessoas.find((pessoa) => id === pessoa.getId());
    if (aux) {
      var index = this.listaPessoas.indexOf(aux);
      this.listaPessoas.splice(index, 1);
    }
  }

  getListaItem(): Array<Item> {
    return this.listaItens;
  }

  getListaPessoa(): Array<Pessoa> {
    return this.listaPessoas;
  }

}