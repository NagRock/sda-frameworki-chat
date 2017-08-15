import { LoginService } from './login-service';
import { Message } from '../model/message';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    public messages: Message[] = [];
    private socket;
    private connected = false;

    constructor(public loginService: LoginService) {
        this.socket = io.connect('localhost:3000');
        this.socket.on('connect', () => {
           this.connected = true;
        });
        this.socket.on('receiveChatMessage', (data) => {
            this.messages.push(data);
        });
        this.socket.on('disconnect', () => {
            this.connected = false;
        });
    }

    public sentMessage(text: string): void {
        const message: Message = {
            content: text,
            author: this.loginService.getUserName(),
            time: Date.now(),
        };
        this.socket.emit('sendChatMessage', message);
    }

    private isConnected(): boolean {
        return this.connected;
    }
}
