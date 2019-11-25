import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyService } from 'src/app/services/key.service';
import { Usuario } from 'src/app/shared/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public isActiveToggleTextPassword: Boolean = true;
  public ativ = false;
  public perfis = [];
  public loginErrorString: string;
  public account = {
    usuario: '',
    senha: ''
  }

  constructor(private router: Router, private db: KeyService) {
  }

  ngOnInit() {
    this.perfis = this.db.getLista('perfil-key');
  }

  public logar(){
    if(!this.formLimpo()){
      let login= this.db.doLogin(this.account);
      if(login){
        login.then((success) => {
          this.recuperarCredenciais();
          this.router.navigate(['/home']);;
        }).catch(error => {
          this.loginErrorString = 'Email ou Senha Incorretos';
        });
      }
    }else{
      this.loginErrorString = 'Preencha todos os Campos';
      this.ativ = true;
    }
  }

  recuperarCredenciais(){
    debugger
    this.perfis.forEach(user =>{
      if(user.usuario === this.account.usuario){
        localStorage.setItem('perfil-key', JSON.stringify(user));
      }
    })
  }

  formLimpo() {
    if (this.account.usuario && this.account.senha) {
      return false;
    }
    return true;
  }

  public cadastrar(){}
  
  public toggleTextPassword(): void{
      this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
  }
  public getType() {
      return this.isActiveToggleTextPassword ? 'password' : 'text';
  }
}
