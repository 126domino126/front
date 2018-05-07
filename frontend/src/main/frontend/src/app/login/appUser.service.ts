import { Injectable } from '@angular/core';
import {AppUser} from "./appUser.model";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AppUserService {

  user: AppUser = new AppUser( '', '');

  private subject = new Subject<AppUser>();

  constructor(){
    this.user = new AppUser( '', '');
  }


  save(user: AppUser) {
    this.user = user;
    this.subject.next(user);
  }

  getUser(): Observable<AppUser> {
    return this.subject.asObservable();
  }

  getUserNow(): AppUser{
    return this.user;
  }
}
