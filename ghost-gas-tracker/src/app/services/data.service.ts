import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Subject} from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.loggedIn = new Subject();
    this.userId = new Subject();
    this.getLogin();
  }

  loggedIn: Subject<boolean>;
  userId: Subject<string>;

  //login feature for sign in
  // doLogin(email: string, password: string) {
  //   this.http.post(API_URL + '/login', {
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
    this.http.get(API_URL + '/', {
      withCredentials: true // <=========== important!
    }).subscribe((resp: any) => {
      const cookieData = JSON.parse(resp);
      this.loggedIn.next(cookieData.token.length ? true : false);
      this.userId.next(cookieData.userId.length ? cookieData.userId : '');
    }, (errorResp) => {
      this.toastr.error('Log in failed')
    })
  }

  logout() {
    this.http.post(API_URL + '/logout', {}, {
      withCredentials: true
    }).subscribe(() => {
      this.loggedIn.next(false);
    });
  }

}
