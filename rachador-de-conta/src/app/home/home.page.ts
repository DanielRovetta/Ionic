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

  valorTotalItem = 0;
  valorTotalPessoa = 0;

  constructor(private business: BusinessService) {
  }

  getAllConsumoByIdPessoa(id: number) {
    return this.business.getAllConsumoByIdPessoa(id);
  }

  getAllConsumoByIdItem(id: number) {
    return this.business.getAllConsumoByIdItem(id);
  }

  ngOnInit() {

  }

  fracaoValorByItem(item: Item): number {
    return this.business.fracaoValorByItem(item);
  }

  processarContaPessoa() {
    this.listaItens = this.business.getAllItem();
    this.listaPessoas = this.business.getAllPessoa();
    this.business.processarContaPessoa();
    this.valorTotalItem = 0;
    this.valorTotalPessoa = 0;
    this.business.getAllItem().forEach(item => this.valorTotalItem += item.getValor());
    this.business.getAllPessoa().forEach(pessoa => this.valorTotalPessoa += pessoa.getValorConta());
  }

}
