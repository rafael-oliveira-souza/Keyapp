import { Component, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { ModalController } from '@ionic/angular';
import { DetalheChaveComponent } from './detalhe-chave/detalhe-chave.component';

@Component({
  selector: 'app-chaves',
  templateUrl: './chaves.page.html',
  styleUrls: ['./chaves.page.scss'],
})
export class ChavesPage implements OnInit {
  public items: Array<any> = Mock.chaves;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  }
  
  async presentModal(titulo: string) {
    const modal = await this.modalController.create({
      component: DetalheChaveComponent,
      componentProps: {
        'nomeChave': titulo,
        'codigoChave': '160053'
      }
    });
    return await modal.present();
  }

}
