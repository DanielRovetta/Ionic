import { Injectable } from '@angular/core';
import { Consumo } from 'src/class/consumo';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';

@Injectable({
  providedIn: 'root'
})

export class BusinessService {

  private listaItens = new Array<Item>;
  private listaPessoas = new Array<Pessoa>;
  private listaConsumos = new Array<Consumo>;

  private idItem = 1;
  private idPessoa = 1;
  private idConsumo = 1;

  constructor() { }

  getAllItem(): Array<Item> {
    return this.listaItens;
  }

  getAllPessoa(): Array<Pessoa> {
    return this.listaPessoas;
  }

  getAllConsumo(): Array<Consumo> {
    return this.listaConsumos;
  }

  getPessoaById(id: number) {
    let aux = this.listaPessoas.find((pessoa) => id === pessoa.getId());
    if (aux) {
      return aux;
    }
    return null
  }

  getItemById(id: number) {
    let aux = this.listaItens.find((item) => id === item.getId());
    if (aux) {
      return aux;
    }
    return null
  }

  getAllConsumoByIdPessoa(id: number) {
    return this.listaConsumos.filter(consumo => id === consumo.getPessoa().getId());
  }

  getAllConsumoByIdItem(id: number) {
    return this.listaConsumos.filter(consumo => id === consumo.getItem().getId());
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

  insertConsumo(consumo: Consumo) {

    let aux = this.listaConsumos.find((con) => consumo.getPessoa().getId() === con.getPessoa().getId() && consumo.getItem().getId() === con.getItem().getId())
    if (aux) {
      aux.setPeso(aux.getPeso() + consumo.getPeso());
      return;
    }
    consumo.setId(this.idConsumo);
    this.idConsumo++;
    this.listaConsumos.push(consumo);
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

  deleteConsumo(id: number) {
    let aux = this.listaConsumos.find((consumo) => id === consumo.getId());
    if (aux) {
      var index = this.listaConsumos.indexOf(aux);
      this.listaConsumos.splice(index, 1);
    }
  }

  incrementarValorContaPessoaById(id: number, valor: number) {
    let aux = this.listaPessoas.find((pessoa) => id === pessoa.getId());
    if (aux) {
      aux.setValorConta(aux.getValorConta() + valor);
    }
  }

  zerarValorContaPessoa() {
    this.listaPessoas.forEach(pessoa => pessoa.setValorConta(0));
  }

  processarContaPessoa() {
    this.zerarValorContaPessoa();
    this.listaItens.forEach(item => {
      let consumos = this.getAllConsumoByIdItem(item.getId());
      let pesos: number = 0;
      consumos.forEach(consumo => pesos += consumo.getPeso());
      let fracao = item.getValor() / pesos;
      consumos.forEach(consumo => this.incrementarValorContaPessoaById(consumo.getPessoa().getId(), fracao * consumo.getPeso()));
    });
  }

}