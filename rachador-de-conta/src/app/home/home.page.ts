import { BusinessService } from 'src/service/business.service';
import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';
import { Consumo } from 'src/class/consumo';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaItens = new Array<Item>;
  listaPessoas = new Array<Pessoa>;

  constructor(private business: BusinessService) {
    this.business.insertPessoa(new Pessoa(1, "Natalia"));
    this.business.insertPessoa(new Pessoa(2, "Daniel"));
    this.business.insertPessoa(new Pessoa(3, "Lucas"));
    this.business.insertPessoa(new Pessoa(4, "Gabriela"));


    this.business.insertItem(new Item(1, "Linguiça", 17.41));
    this.business.insertItem(new Item(2, "Refrigerante", 14.98));
    this.business.insertItem(new Item(3, "Energético", 15.99));
    this.business.insertItem(new Item(4, "Vodka", 22.99));
    this.business.insertItem(new Item(5, "Carne", 59.27));
    this.business.insertItem(new Item(6, "Suco", 10.00));


    this.business.insertConsumo(new Consumo(0, new Pessoa(1, "Natalia"), new Item(1, "Linguiça", 17.41), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(1, "Natalia"), new Item(2, "Refrigerante", 14.98), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(1, "Natalia"), new Item(3, "Energético", 15.99), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(1, "Natalia"), new Item(4, "Vodka", 22.99), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(1, "Natalia"), new Item(5, "Carne", 59.27), 1));

    this.business.insertConsumo(new Consumo(0, new Pessoa(2, "Daniel"), new Item(1, "Linguiça", 17.41), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(2, "Daniel"), new Item(2, "Refrigerante", 14.98), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(2, "Daniel"), new Item(3, "Energético", 15.99), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(2, "Daniel"), new Item(4, "Vodka", 22.991), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(2, "Daniel"), new Item(5, "Carne", 59.27), 1));

    this.business.insertConsumo(new Consumo(0, new Pessoa(3, "Lucas"), new Item(3, "Energético", 15.99), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(3, "Lucas"), new Item(4, "Vodka", 22.991), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(3, "Lucas"), new Item(5, "Carne", 59.27), 2));

    this.business.insertConsumo(new Consumo(0, new Pessoa(4, "Gabriela"), new Item(1, "Linguiça", 17.41), 1));
    this.business.insertConsumo(new Consumo(0, new Pessoa(4, "Gabriela"), new Item(6, "Suco", 10.00), 1));

  }

  ngOnInit() {
    this.listaItens = this.business.getListaItem();
    this.listaPessoas = this.business.getListaPessoa();
  }
}
