import { HttpService } from './http.service';
import { Component } from '@angular/core';
import { WikiMessage } from './wiki-message';
import { WikiMessageForJson } from './wiki-message-for-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: WikiMessage[] = [];
  newMessage: string = "";
  constructor(private httpService: HttpService) { }

  addNewMessage(str: string) {
    this.newMessage = str;
  }

  addMessage() {
    if (this.newMessage.length != 0) {
      this.httpService.addMessage(new WikiMessageForJson(this.newMessage)).subscribe(() => {
        console.log("addMessage works");
        this.getAllMessages();
      });
      this.newMessage = "";
    } else {
      console.log("empty message");
    }

  }

  getAllMessages() {
    this.httpService.getAllMessages().subscribe(msgs => this.updateAllMessages(msgs));
  }
  updateAllMessages(messages: WikiMessage[]) {
    this.messages = messages;
  }

  removeMessage(msg: WikiMessage) {
    console.log("message removed " + msg.id);
    this.httpService.removeMessage(msg.id).subscribe(() => {
      console.log("message removed");
      this.getAllMessages();
    });

  }
}

