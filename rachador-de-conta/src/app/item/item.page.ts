import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/class/item';
import { BusinessService } from 'src/service/business.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  descricao: string = '';
  valor: any;

  listaItens = new Array<Item>;

  constructor(private business: BusinessService, private modalCtrl: ModalController) {
  }

  deleteItem(id: number) {
    this.business.deleteItem(id);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let item: Item = new Item(0, this.descricao, this.valor);
    this.business.insertItem(item);
    this.descricao = "";
    this.valor = null;
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  ngOnInit() {
    this.listaItens = this.business.getAllItem();
  }

}
