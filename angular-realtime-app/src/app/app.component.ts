import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newMessage: string;
  messageList: string[] = [];

  constructor(private _chatService: ChatService) {}

  sendMessage() {
    this._chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnInit() {
    this._chatService.getMessages().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }
}
