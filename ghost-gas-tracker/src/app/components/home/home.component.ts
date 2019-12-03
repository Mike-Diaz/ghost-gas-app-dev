import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Sign in';
  user: any;
  loggedIn: boolean = false;

  constructor(private _socioAuthServ: AuthService) { }

  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
        this.loggedIn = true;
        this.loggedInEvent.emit(this.loggedIn);
        this.userEvent.emit(this.user);
      }
    );
    
  }

  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    this.loggedIn = false;
    this.loggedInEvent.emit(this.loggedIn);
    this.userEvent.emit(this.user);
    console.log('User signed out.');
  }

  ngOnInit() {
    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
  }

  @Output() loggedInEvent = new EventEmitter<boolean>();
  @Output() userEvent = new EventEmitter<any>();
}
