import { Component, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { ModalController } from '@ionic/angular';
import { DetalheChaveComponent } from './detalhe-chave/detalhe-chave.component';
import { KeyService } from '../services/key.service';
import { Chave } from '../shared/model';

@Component({
  selector: 'app-chaves',
  templateUrl: './chaves.page.html',
  styleUrls: ['./chaves.page.scss'],
})
export class ChavesPage implements OnInit {
  public items: Array<any>;

  constructor(public modalController: ModalController, private db: KeyService) {}

  ngOnInit() {
    // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    this.items = this.db.getLista('chave');
  }
  
  async presentModal(chave: Chave) {
    const modal = await this.modalController.create({
      component: DetalheChaveComponent,
      componentProps: {chave}
    });
    return await modal.present();
  }

}
