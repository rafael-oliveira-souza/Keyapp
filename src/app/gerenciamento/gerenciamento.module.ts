import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerenciamentoPage } from './gerenciamento.page';
import { SharedModule } from '../shared/Shared.module';
import { AddChaveGerenciamentoComponent } from './add-chave-gerenciamento/add-chave-gerenciamento.component';
import { DetalheGerenciamentoComponent } from './detalhe-gerenciamento/detalhe-gerenciamento.component';
import { DetalheEditUsuarioGerenciamentoComponent } from './detalhe-edit-usuario-gerenciamento/detalhe-edit-usuario-gerenciamento.component';
import { DetalheEditNomeGerenciamentoComponent } from './detalhe-edit-nome-gerenciamento/detalhe-edit-nome-gerenciamento.component';

const routes: Routes = [
  {
    path: '',
    component: GerenciamentoPage
  },
  {
    path: 'detalhe',
    component: DetalheGerenciamentoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    AddChaveGerenciamentoComponent, DetalheEditUsuarioGerenciamentoComponent, DetalheEditNomeGerenciamentoComponent
  ],
  declarations: [GerenciamentoPage, AddChaveGerenciamentoComponent, DetalheGerenciamentoComponent, DetalheEditUsuarioGerenciamentoComponent, DetalheEditNomeGerenciamentoComponent]
})
export class GerenciamentoPageModule {}
