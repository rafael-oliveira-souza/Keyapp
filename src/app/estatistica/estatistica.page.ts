import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.page.html',
  styleUrls: ['./estatistica.page.scss'],
})
export class EstatisticaPage implements OnInit {
  public data:Date = new Date();
  public dataHora:string;
  public usuario:string;
  public mensagem:string;
  public usuario2:string;
  public mensagem2:string;

  constructor() { }

  ngOnInit() {
    this.dataHora = this.data.toLocaleString();
    this.usuario = "Marcos usou a";
    this.mensagem = "chave principal";
    this.usuario2 = "Yan Luís usou a";
    this.mensagem2 = "chave da casa";
  
  

  }

}
