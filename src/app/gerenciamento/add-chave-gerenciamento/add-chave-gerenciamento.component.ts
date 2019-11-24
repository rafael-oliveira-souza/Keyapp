import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chave-gerenciamento',
  templateUrl: './add-chave-gerenciamento.component.html',
  styleUrls: ['./add-chave-gerenciamento.component.scss'],
})
export class AddChaveGerenciamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    debugger;
    console.log('2',this.router.getCurrentNavigation());}

}
