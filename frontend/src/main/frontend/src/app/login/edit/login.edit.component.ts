import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService} from "../login.service";
import {AppUserService} from "../appUser.service";
import {AppUser} from "../appUser.model";
import {Subscription} from "rxjs/Subscription";




@Component({
  selector: 'app-login',
  templateUrl: './login.edit.component.html',
  styleUrls: ['./login.edit.component.css']
})
export class LoginEditComponent implements OnInit {

  temp: AppUser = new AppUser('','');
  user: AppUser = new AppUser('', '');
  tempRe: string = '';
  loginError: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private appUserService: AppUserService) {
    this.temp = new AppUser('', '');
    this.user = new AppUser('', '');
  }

  ngOnInit() {
    this.temp = new AppUser('', '');
    this.user = new AppUser('', '');
  }

  username(){

    this.loginError = '';
    this.user = this.appUserService.getUserNow();
    this.user.username = this.temp.username;

    this.loginService.findByName(this.user.username).subscribe(
      (res => {
        if (res ==null){
          this.loginService.update(this.user).subscribe(
            ( res => {this.user = res} )
          );
          this.appUserService.save(this.user);
        }
        else {
          this.loginError = 'Username already taken';
          console.log(this.loginError);
        }
      })
    );
  }

  password(){
    this.loginError = '';
    if (this.temp.password === this.tempRe){
      this.user = this.appUserService.getUserNow();
      this.user.password = this.temp.password;

      this.appUserService.save(this.user);
      this.loginService.update(this.user).subscribe(
        ( res => {this.user = res} )
      );
    }
    else{
      this.loginError = 'Passwords does not match';
    }
  }

}
