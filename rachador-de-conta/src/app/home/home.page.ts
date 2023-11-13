import { BusinessService } from 'src/service/business.service';
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

  constructor(private business: BusinessService) {
    let item: Item = new Item(0, "Linguiça", 20.00);
    let pessoa: Pessoa = new Pessoa(0, "Daniel");
    this.business.insertPessoa(pessoa);
    this.business.insertItem(item);

    item = new Item(0, "Refrigerante", 20.00);
    pessoa = new Pessoa(0, "Natalia");
    this.business.insertPessoa(pessoa);
    this.business.insertItem(item);
  }

  ngOnInit() {
    this.listaItens = this.business.getListaItem();
    this.listaPessoas = this.business.getListaPessoa();
  }
}
