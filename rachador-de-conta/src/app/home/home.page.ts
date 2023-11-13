import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaItens = new Array<Item>;
  listaPessoas = new Array<Pessoa>;

  constructor() {

    let item: Item = new Item("Linguiça", 20.00);
    let pessoa: Pessoa = new Pessoa("Daniel");
    this.listaItens.push(item);
    this.listaPessoas.push(pessoa);

    item = new Item("Refrigerante", 20.00);
    pessoa = new Pessoa("Natalia");
    this.listaItens.push(item);
    this.listaPessoas.push(pessoa);
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}
