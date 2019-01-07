import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WikiMessage } from './wiki-message';
import { WikiMessageForJson } from './wiki-message-for-json';
const BASE_URL = "http://localhost:8080";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

 
  
  getAllMessages(): Observable<WikiMessage[]> {
    return this.http.get<WikiMessage[]>(BASE_URL + '/messages');
  }
  addMessage(message:WikiMessageForJson): Observable<WikiMessageForJson> {
    return this.http.post<WikiMessageForJson>(BASE_URL + '/message',message);
  }
  removeMessage(id:number): Observable<WikiMessage> {
    return this.http.delete<WikiMessage>(BASE_URL + '/messages/'+id);
  }
}

