import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-edit-usuario-gerenciamento',
  templateUrl: './detalhe-edit-usuario-gerenciamento.component.html',
  styleUrls: ['./detalhe-edit-usuario-gerenciamento.component.scss'],
})
export class DetalheEditUsuarioGerenciamentoComponent implements OnInit {
  @Input() chave: string;

  constructor(private modalController: ModalController, navParams: NavParams) {
    this.chave = navParams.get('chave');
  }

  ngOnInit() {
  }

  fechar() {
    console.log(this.chave)
    this.modalController.dismiss();
  }
}
