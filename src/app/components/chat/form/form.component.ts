import { NgModel } from '@angular/forms/';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output()
  public messageEntered: EventEmitter<string> = new EventEmitter();

  @ViewChild('messageInput')
  public loginInput: NgModel;

  public message = '';

  constructor() { }

  public sendMessage(): void {
    if (this.loginInput.valid)  {
      this.messageEntered.emit(this.message);
      this.loginInput.reset();
    }
  }

}
