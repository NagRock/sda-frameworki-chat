import { ChatService } from './service/chat-service';
import { LoginService } from './service/login-service';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/chat/form/form.component';
import { MessageComponent } from './components/chat/list/message/message.component';
import { ListComponent } from './components/chat/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

import {NgxAutoScroll} from 'ngx-auto-scroll/lib/ngx-auto-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FormComponent,
    ListComponent,
    ChatComponent,
    LoginComponent,
    NgxAutoScroll,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoginService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
