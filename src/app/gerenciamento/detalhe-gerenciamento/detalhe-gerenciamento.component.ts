import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chave } from 'src/app/shared/model';
import { ModalController } from '@ionic/angular';
import { DetalheEditUsuarioGerenciamentoComponent } from '../detalhe-edit-usuario-gerenciamento/detalhe-edit-usuario-gerenciamento.component';
import { DetalheEditNomeGerenciamentoComponent } from '../detalhe-edit-nome-gerenciamento/detalhe-edit-nome-gerenciamento.component';

@Component({
  selector: 'app-detalhe-gerenciamento',
  templateUrl: './detalhe-gerenciamento.component.html',
  styleUrls: ['./detalhe-gerenciamento.component.scss'],
})
export class DetalheGerenciamentoComponent implements OnInit {
  public chave: Chave;
  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.chave = this.router.getCurrentNavigation().extras.state.chave;
  }

  async editarNome() {
    const modal = await this.modalController.create({
      component: DetalheEditNomeGerenciamentoComponent,
      componentProps: {
        chave: this.chave
      }
    });
    return await modal.present();
  }

  async editarUsuario() {
    const modal = await this.modalController.create({
      component: DetalheEditUsuarioGerenciamentoComponent,
      componentProps: {
        chave: this.chave
      }
    });
    return await modal.present();
  }

  remover(){
    // this.chave
  }

}
