import { LoginService } from '../../service/login-service';
import { ChatService } from '../../service/chat-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  constructor(public chatService: ChatService, public loginService: LoginService) { }

  public onMessageEntered(message: string): void {
     this.chatService.sentMessage(message);
  }

  ngOnInit() {
  }

}
