import { LoginService } from '../../service/login-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userLogin: string;

  constructor(private loginService: LoginService) { }

  public onEnterButtonClick() {
    this.loginService.login(this.userLogin);
  }
}
