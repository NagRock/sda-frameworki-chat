import { LoginService } from '../../service/login-service';
import { ChatService } from '../../service/chat-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  public messages;

  constructor(public chatService: ChatService, public loginService: LoginService) { 
    this.messages = chatService.getMessages();
  }

  public onMessageEntered(message: string): void {
     this.chatService.sentMessage(message);
  }

  ngOnInit() {
  }

}
