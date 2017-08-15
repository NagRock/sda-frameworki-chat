import { Message } from '../../../model/message';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public messages: Message[] = [];

  @Input()
  public currentUserName = '';

  constructor() { }

  ngOnInit() {
  }

  public isSelfMessage(message: Message): boolean {
    return message.author === this.currentUserName;
  }

}
