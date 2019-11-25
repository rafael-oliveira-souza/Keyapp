import { Component, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { Chave, Usuario } from '../shared/model';
import { NavController, ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { KeyService } from '../services/key.service';
import { AddChaveGerenciamentoComponent } from './add-chave-gerenciamento/add-chave-gerenciamento.component';


@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.page.html',
  styleUrls: ['./gerenciamento.page.scss'],
})
export class GerenciamentoPage implements OnInit {
  public fechaduras: any;
  public usuarios: Array<Usuario> = [];

  constructor(public nav: NavController, private modalController: ModalController,
     private router: Router, private db: KeyService) { }

  ngOnInit() {
    this.fechaduras = this.db.getLista('chave');
    this.usuarios = this.db.getLista('user');
  }

  abrirDetalhe(chave: Chave) {
    debugger
    this.usuarios.forEach(user => {
      if(chave.usuario && chave.usuario.length > 0){
        if (chave.usuario.includes(user.id)) {
          this.router.navigate(['gerenciamento/detalhe'], { state: {chave} });
        }
      }
    })
  }

  async addChave() {
    const modal = await this.modalController.create({
      component: AddChaveGerenciamentoComponent,
    });
    return await modal.present();
  }


}
