import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-edit-nome-gerenciamento',
  templateUrl: './detalhe-edit-nome-gerenciamento.component.html',
  styleUrls: ['./detalhe-edit-nome-gerenciamento.component.scss'],
})
export class DetalheEditNomeGerenciamentoComponent implements OnInit {
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
