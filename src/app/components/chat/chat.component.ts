import { LoginService } from '../../service/login-service';
import { ChatService } from '../../service/chat-service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../../model/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  public messages: Observable<Message[]>;

  constructor(public chatService: ChatService, public loginService: LoginService) {
    this.messages = chatService.getMessages();
  }

  public onMessageEntered(message: string): void {
     this.chatService.sendMessage(message);
  }

  ngOnInit() {
  }

}
