import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, ItemReorderEventDetail } from '@ionic/angular';
import { IonModal, ModalController } from '@ionic/angular/common';
import { Item } from 'src/class/item';
import { Pessoa } from 'src/class/pessoa';
import { BusinessService } from 'src/service/business.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  nome: string = '';
  listaPessoas = new Array<Pessoa>;

  constructor(private business: BusinessService, private modalCtrl: ModalController) {
  }

  deletePessoa(id: number) {
    this.business.deletePessoa(id);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    let pessoa: Pessoa = new Pessoa(0, this.nome);
    this.business.insertPessoa(pessoa);
    this.nome = "";
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  ngOnInit() {
    this.listaPessoas = this.business.getAllPessoa();
  }
}
