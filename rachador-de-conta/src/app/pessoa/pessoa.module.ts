import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaPageRoutingModule } from './pessoa-routing.module';

import { PessoaPage } from './pessoa.page';
import { CdkDrag } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaPageRoutingModule,
    CdkDrag

  ],
  declarations: [PessoaPage]
})
export class PessoaPageModule { }
