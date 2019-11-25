import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstatisticaPage } from './estatistica.page';
import { SharedModule } from '../shared/Shared.module';

const routes: Routes = [
  {
    path: '',
    component: EstatisticaPage
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
  declarations: [EstatisticaPage]
})
export class EstatisticaPageModule {}
