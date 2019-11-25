import { Component, OnInit, Input } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Chave, Estatistica, Usuario } from 'src/app/shared/model';
import { KeyService } from 'src/app/services/key.service';

@Component({
  selector: 'app-detalhe-chave',
  templateUrl: './detalhe-chave.component.html',
  styleUrls: ['./detalhe-chave.component.scss'],
})
export class DetalheChaveComponent implements OnInit {
  public nome: string;
  public user: Usuario;
  // Data passed in by componentProps
  @Input() chave: Chave;

  constructor(navParams: NavParams, private router: Router, private db: KeyService, 
    private alertController: AlertController, public modalController: ModalController) {
    this.chave = navParams.get('chave');
  }

  ngOnInit() {
    this.nome = 'Fechadura: ' + this.chave.titulo;
    console.log(localStorage.getItem('perfil-key'))
    this.user =  JSON.parse(localStorage.getItem('perfil-key'));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fechadura Aberta',
      subHeader: '',
      message: 'A fechadura escolhida foi aberta.',
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          cssClass: 'secondary',
          handler: (blah) => {
            this.modalController.dismiss();
            this.db.inserir('estatistica', new Estatistica(new Date().toLocaleString(), this.user.id, `Abriu a ${this.nome}`));
            this.router.navigate(['/home']);
          }
        },
      ]
    });

    await alert.present();
  }
}
