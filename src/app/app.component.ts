import { ChatService } from './service/chat-service';
import { LoginService } from './service/login-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public isUserLogged;
  public isConnectedToServer;

   constructor(private loginService: LoginService, private chatService: ChatService) {
      this.isUserLogged = loginService.getUserIsLoggedIn();
      this.isConnectedToServer = chatService.isConnected();
   }
}
