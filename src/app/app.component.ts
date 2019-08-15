import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFire) {
    this.items = af.database.lost('/messages', {
      query: {
        limiToLast: 5
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
  }

  login() {  //this is the method to call up when logging in
    this.af.auth.login({
      provder: AuthProviders.Facebook,
      method: AuthMethods.Popup  //redirect can also be used
    })
  }

  logout() {
    this.af.auth.logout();
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.name.facebook.displayName });
    this.msgVal = '';
  }

}
