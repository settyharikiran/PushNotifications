import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { MessagingService } from './messaging.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({         
        apiKey: "AIzaSyB2KbLGxsU3WtPqPD7TebUo_9rertGqduQ",
        authDomain: "pushdemo-bcc1a.firebaseapp.com",
        databaseURL: "https://pushdemo-bcc1a.firebaseio.com",
        projectId: "pushdemo-bcc1a",
        storageBucket: "pushdemo-bcc1a.appspot.com",
        messagingSenderId: "128927084883"
    }),                                       
    AngularFireDatabaseModule,                 
    AngularFireAuthModule 
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
