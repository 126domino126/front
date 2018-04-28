import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppUser} from "./appUser.model";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser('','');
  temp: string;
  error: string;
  constructor(
    private router: Router) { }
  //
  ngOnInit() {
    user = new AppUser();
  }

  login() {
    console.log(this.user);
  }

  register(){
    if (this.temp !== this.user.password){
      this.error = ''
    }
    console.log(this.user);
    console.log(this.temp);

  }
}

export var user;
