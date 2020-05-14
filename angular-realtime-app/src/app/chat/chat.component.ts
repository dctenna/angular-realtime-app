import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  newMessage: string;
  messageList: {user: string, message: string}[] = [];
  user: string;

  private _subs = new Subscription();

  constructor(
    private _chatService: ChatService,
    private _activatedRoute: ActivatedRoute,
    ) {}

  sendMessage() {
    this._chatService.sendMessage({user: this.user, message: this.newMessage});
    this.newMessage = '';
  }

  ngOnInit() {
    this._chatService.getMessages().pipe(tap(console.log)).subscribe((value) => {
      this.messageList.push(value);
    });

    this._subs.add(this._activatedRoute.queryParams.subscribe(params =>
      this.user = params.user));
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
