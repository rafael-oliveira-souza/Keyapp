import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-chave',
  templateUrl: './detalhe-chave.component.html',
  styleUrls: ['./detalhe-chave.component.scss'],
})
export class DetalheChaveComponent implements OnInit {
  // Data passed in by componentProps
  @Input() nomeChave: string;
  @Input() codigoChave: string;

  constructor(navParams: NavParams) {
    this.nomeChave = navParams.get('nomeChave');
    this.codigoChave = navParams.get('codigoChave');
  }

  ngOnInit() {}
}
