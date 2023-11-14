import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Consumo } from 'src/class/consumo';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';
import { BusinessService } from 'src/service/business.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',

  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  listaPessoas = new Array<Pessoa>;
  listaItens = new Array<Item>;
  listaConsumos = new Array<Consumo>;

  pessoa: any;
  item: any;
  peso: number = 1;

  constructor(private business: BusinessService, private modalCtrl: ModalController) {
  }

  deleteConsumo(id: number) {
    this.business.deleteConsumo(id);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let consumo: Consumo = new Consumo(0, this.pessoa, this.item, this.peso);
    this.business.insertConsumo(consumo);
    this.pessoa = null;
    this.item = null;
    this.peso = 1;
    return this.modalCtrl.dismiss(null, 'confirm');
  }
  selectPessoa(ev: any) {
    this.pessoa = ev.target.value;
  }

  selectItem(ev: any) {
    this.item = ev.target.value;
  }

  ngOnInit() {
    this.listaPessoas = this.business.getListaPessoa();
    this.listaItens = this.business.getListaItem();
    this.listaConsumos = this.business.getListaConsumo();
  }

}
