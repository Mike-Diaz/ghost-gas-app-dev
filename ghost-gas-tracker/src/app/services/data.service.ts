import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Subject} from 'rxjs';


const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/'
};

@Injectable()
export class DataService {


  loggedIn: Subject<boolean>;

  //login feature for sign in 
  // doLogin(email: string, password: string) {
  //   this.http.post(environment.apiUrl + '/login', {
  //     email: email,
  //     password: password
  //   }, {
  //     withCredentials: true
  //   }).subscribe((resp: any) => {
  //     this.loggedIn.next(true);
  //     this.toastr.success(resp && resp.user && resp.user.name ? `Welcome ${resp.user.name}` : 'Logged in!');
  //   }, (errorResp) => {
  //     this.loggedIn.next(false);
  //     errorResp.error ? this.toastr.error(errorResp.error.errorMessage) : this.toastr.error('An unknown error has occured.');
  //   });
  // }

  getLogin() {
    this.http.get(environment.apiUrl + '/', {
      withCredentials: true // <=========== important!
    }).subscribe((resp: any) => {
      this.loggedIn.next(resp.loggedIn);
    }, (errorResp) => {
      this.toastr.error('Log in failed')
    })
  }

  logout() {
    this.http.post(environment.apiUrl + '/logout', {}, {
      withCredentials: true
    }).subscribe(() => {
      this.loggedIn.next(false);
    });
  }

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.loggedIn = new Subject();
    this.getLogin();
  }

}