import { Component, OnInit } from '@angular/core';
import { Mock } from '../shared/mock';
import { Chave } from '../shared/model';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.page.html',
  styleUrls: ['./gerenciamento.page.scss'],
})
export class GerenciamentoPage implements OnInit {
  public fechaduras: any;

  constructor(public nav: NavController, private router: Router) { }

  ngOnInit() {
    this.fechaduras = Mock.chaves;

  }
  abrirDetalhe(chave: Chave) {
    Mock.usuarios.forEach(user => {
      if (chave.usuario.includes(user.id)) {
        this.router.navigate(['gerenciamento/detalhe'], { state: {chave} });
      }
    })
  }

}
