import { Component, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { ModalController } from '@ionic/angular';
import { DetalheChaveComponent } from './detalhe-chave/detalhe-chave.component';
import { KeyService } from '../services/key.service';

@Component({
  selector: 'app-chaves',
  templateUrl: './chaves.page.html',
  styleUrls: ['./chaves.page.scss'],
})
export class ChavesPage implements OnInit {
  public items: Array<any> = Mock.chaves;

  constructor(public modalController: ModalController, private db: KeyService) {}

  ngOnInit() {
    // icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    console.log('Usuario : ',this.db.getLista('usuario'));
    console.log('Profissional', this.db.getLista('profissional'));
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
