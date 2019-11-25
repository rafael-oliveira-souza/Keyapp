import { Component, OnInit } from '@angular/core';
import { KeyService } from '../services/key.service';
import { ModalController } from '@ionic/angular';
import { Estatistica, Usuario } from '../shared/model';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.page.html',
  styleUrls: ['./estatistica.page.scss'],
})
export class EstatisticaPage implements OnInit {
  public estatisticas: Array<Estatistica> = [];
  public perfis: Array<Usuario> = [];
  public carregado: boolean = false;

  constructor(private modalController: ModalController,
    private db: KeyService) { }

  ngOnInit() {
    this.estatisticas = this.db.getLista('estatistica');
    this.perfis = this.db.getLista('perfil-key');
    this.carregado = true;
  }

  carregarUsuario(id: number) {
    let retorno: any = id;
debugger
    this.perfis.forEach(user => {
      if (user.id === id) {
        retorno = user.nome;
      }
    })

    return retorno;
  }

}
