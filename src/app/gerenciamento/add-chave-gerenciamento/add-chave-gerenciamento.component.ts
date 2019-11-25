import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { KeyService } from 'src/app/services/key.service';
import { Chave } from 'src/app/shared/model';

@Component({
  selector: 'app-add-chave-gerenciamento',
  templateUrl: './add-chave-gerenciamento.component.html',
  styleUrls: ['./add-chave-gerenciamento.component.scss'],
})
export class AddChaveGerenciamentoComponent implements OnInit {
  public nomeChave: string;

  constructor(private modalController: ModalController,
     private db: KeyService) {
  }

  ngOnInit() {
  }

  concluir(save?: boolean){
    let newKey: Chave;
    if(save){
      newKey = new Chave();
      newKey.titulo = this.nomeChave;
      this.db.inserir('chave', newKey);
    }
    this.modalController.dismiss();
  }
}
