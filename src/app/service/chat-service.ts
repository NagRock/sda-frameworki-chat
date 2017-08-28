import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { LoginService } from './login-service';
import { Message } from '../model/message';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    private messages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
    private socket;
    private connected: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(public loginService: LoginService) {
        this.socket = io.connect('localhost:3000');
        this.socket.on('connect', () => {
           this.connected.next(true);
        });
        this.socket.on('receiveChatMessage', (data) => {
            const currentMessages = this.messages.getValue();
            currentMessages.push(data);
            this.messages.next(currentMessages);
        });
        this.socket.on('disconnect', () => {
            this.connected.next(false);
        });
    }

    public sendMessage(text: string): void {
        const message: Message = {
            content: text,
            author: this.loginService.getUserName(),
            time: Date.now(),
        };
        this.socket.emit('sendChatMessage', message);
    }

    public isConnected(): Observable<boolean>  {
        return this.connected.asObservable();
    }

    public getMessages(): Observable<Message[]> {
        return this.messages.asObservable();
    }
}
