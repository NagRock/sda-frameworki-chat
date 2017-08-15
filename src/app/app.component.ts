import { ChatService } from './service/chat-service';
import { LoginService } from './service/login-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   constructor(public loginService: LoginService, public chatService: ChatService) {

   }
}
