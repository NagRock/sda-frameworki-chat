import { Message } from '../../../../model/message';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  public message: Message;

  @Input()
  public isSelfMessage = false;

  constructor() { }

  ngOnInit() {
  }

}
