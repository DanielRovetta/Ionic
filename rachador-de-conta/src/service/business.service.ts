import { Consumo } from './../class/consumo';
import { Injectable } from '@angular/core';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private storage: Storage) {
    this.iniciarStorage()

  }

  async iniciarStorage() {
    await this.storage.create();
  }

  async salvarDados() {
    await this.storage['set']('listaConsumos', this.listaConsumos);
    await this.storage['set']('listaPessoas', this.listaPessoas);
    await this.storage['set']('listaItens', this.listaItens);
  }

  async carregarDados() {
    this.listaConsumos = await this.storage['get']('listaConsumos');
    this.listaPessoas = await this.storage['get']('listaPessoas');
    this.listaItens = await this.storage['get']('listaItens');
  }
  async zerarDados() {
    this.listaConsumos = [];
    this.listaPessoas = [];
    this.listaItens = [];
    await this.storage['remove']('listaConsumos');
    await this.storage['remove']('listaPessoas');
    await this.storage['remove']('listaItens');
  }


  getAllItem(): Array<Item> {
    return this.listaItens;
  }

  getAllPessoa(): Array<Pessoa> {
    return this.listaPessoas;
  }

  getAllConsumo(): Array<Consumo> {
    return this.listaConsumos;
  }

  getPessoaById(id: number): Pessoa {
    let aux = this.listaPessoas.find((pessoa) => id === pessoa.getId());
    if (aux) {
      return aux;
    }
    return new Pessoa(0, "");
  }

  getItemById(id: number): Item {
    let aux = this.listaItens.find((item) => id === item.getId());
    if (aux) {
      return aux;
    }
    return new Item(0, "", 0);
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

  insertConsumoAllToItem(item: Item) {
    this.listaPessoas.forEach((pessoa) => {
      let consumo: Consumo = new Consumo(0, pessoa, item, 1);
      this.insertConsumo(consumo);
    });
  }

  insertConsumoAllToPessoa(pessoa: Pessoa) {
    this.listaItens.forEach((item) => {
      let consumo: Consumo = new Consumo(0, pessoa, item, 1);
      this.insertConsumo(consumo);
    });
  }

  deleteItem(id: number) {
    let aux = this.listaItens.find((item) => id === item.getId());
    if (aux) {
      var index = this.listaItens.indexOf(aux);
      this.listaItens.splice(index, 1);
    }

    let aux2 = this.listaConsumos.find((consumo) => id === consumo.getItem().getId());
    while (aux2) {
      if (aux2) {
        var index = this.listaConsumos.indexOf(aux2);
        this.listaConsumos.splice(index, 1);
      }
      aux2 = this.listaConsumos.find((consumo) => id === consumo.getItem().getId());
    }
  }

  deletePessoa(id: number) {
    let aux = this.listaPessoas.find((pessoa) => id === pessoa.getId());
    if (aux) {
      var index = this.listaPessoas.indexOf(aux);
      this.listaPessoas.splice(index, 1);
    }

    let aux2 = this.listaConsumos.find((consumo) => id === consumo.getPessoa().getId());
    while (aux2) {
      if (aux2) {
        var index = this.listaConsumos.indexOf(aux2);
        this.listaConsumos.splice(index, 1);
      }
      aux2 = this.listaConsumos.find((consumo) => id === consumo.getPessoa().getId());
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

  fracaoValorByItem(item: Item): number {
    let consumos = this.getAllConsumoByIdItem(item.getId());
    let pesos: number = 0;
    consumos.forEach(consumo => pesos += consumo.getPeso());
    return item.getValor() / pesos;
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