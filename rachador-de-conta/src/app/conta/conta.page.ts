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

  allItens: boolean = false;
  allPessoas: boolean = false;

  constructor(private business: BusinessService, private modalCtrl: ModalController) {
  }

  deleteConsumo(id: number) {
    this.business.deleteConsumo(id);
  }

  cancel() {
    this.pessoa = null;
    this.item = null;
    this.peso = 1;
    this.allItens = false;
    this.allPessoas = false;
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let consumo: Consumo = new Consumo(0, this.pessoa, this.item, this.peso);

    if (this.allItens == false && this.allPessoas == false) {
      this.business.insertConsumo(consumo);
    }
    if (this.allItens) {
      this.business.insertConsumoAllToPessoa(this.pessoa);
    }
    if (this.allPessoas) {
      this.business.insertConsumoAllToItem(this.item);
    }
    this.pessoa = null;
    this.item = null;
    this.peso = 1;
    this.allItens = false;
    this.allPessoas = false;
    return this.modalCtrl.dismiss(null, 'confirm');
  }
  selectPessoa(ev: any) {
    this.pessoa = ev.target.value;
  }

  selectItem(ev: any) {
    this.item = ev.target.value;
  }

  ngOnInit() {
    this.listaPessoas = this.business.getAllPessoa();
    this.listaItens = this.business.getAllItem();
    this.listaConsumos = this.business.getAllConsumo();
  }

}
