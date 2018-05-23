import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeyWordComponent } from './key-word/key-word.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EmbedWebviewComponent } from './embed-webview/embed-webview.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';
import { AngularFirestore } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyAt4JqhPWFqgn4Voc971zIR1nzQ9XMpKAo",
  authDomain: "restock-helper.firebaseapp.com",
  databaseURL: "https://restock-helper.firebaseio.com",
  projectId: "restock-helper",
  storageBucket: "restock-helper.appspot.com",
  messagingSenderId: "966464179859"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KeyWordComponent,
    JumbotronComponent,
    EmbedWebviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
