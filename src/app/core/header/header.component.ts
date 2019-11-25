import { Component, OnInit, Input } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('back') back: boolean;
  @Input('close') close: boolean;
  @Input('hideMenu') hideMenu: boolean;
  @Input('title') title: string;
  
  constructor(private _menu: MenuController, private _nav: NavController, private modalController: ModalController) { }

  ngOnInit() {
    if(!this.title){
      this.title = 'Fechadura Inteligente';
    }
  }

  toggleMenu(){
    this._menu.toggle();
  }

  goBack(){
    this._nav.back();
  }

  onClose(){
    this.modalController.dismiss();
  }
}
