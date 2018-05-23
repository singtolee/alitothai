import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeyWordComponent } from './key-word/key-word.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EmbedWebviewComponent } from './embed-webview/embed-webview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KeyWordComponent,
    JumbotronComponent,
    EmbedWebviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
