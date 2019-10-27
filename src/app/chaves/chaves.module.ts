import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/Shared.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChavesPage } from './chaves.page';
import { DetalheChaveComponent } from './detalhe-chave/detalhe-chave.component';

const routes: Routes = [
  {
    path: '',
    component: ChavesPage
  },
  // {
  //   path: 'detalhe',
  //   component: DetalheChaveComponent
  // }
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
    DetalheChaveComponent
  ],
  declarations: [ChavesPage, DetalheChaveComponent]
})
export class ChavesPageModule {}
