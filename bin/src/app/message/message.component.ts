import { HttpService } from 'src/app/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { WikiMessage } from '../wiki-message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: WikiMessage;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  removeMessage() {
    console.log("message removed");
  }
}

