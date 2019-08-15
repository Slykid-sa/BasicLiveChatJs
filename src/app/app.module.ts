import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

var firebaseConfig = {
  apiKey: "AIzaSyC1y-m19UUO1vA7d3O-6llS4SFmuIQdFbQ",
  authDomain: "angularchatapp-231c9.firebaseapp.com",
  databaseURL: "https://angularchatapp-231c9.firebaseio.com",
  projectId: "angularchatapp-231c9",
  storageBucket: "",
  messagingSenderId: "958288557915",
  appId: "1:958288557915:web:aac71c1933bd07fc"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   