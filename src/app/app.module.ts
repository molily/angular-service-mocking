import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  FlipACoinComponent,
} from './components/flip-a-coin/flip-a-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipACoinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
