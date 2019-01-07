import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
