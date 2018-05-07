import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppUser} from "./appUser.model";
import {LoginService} from "./login.service";
import {AppUserService} from "./appUser.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser('','');
  temp: string;
  loginError: string = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private appUserService: AppUserService) { }

  ngOnInit() {
    this.user = new AppUser('', '');
  }

  login() {
    this.loginError = '';
    console.log(this.user);
    this.loginService.findByName(this.user.username).subscribe(
      (res => {
        console.log('SERVICE-LOGIN');
        console.log(res);

        if (res !=null && res.username === this.user.username && res.password === this.user.password){
          this.user = res;
          this.appUserService.save(this.user);
          this.router.navigateByUrl('/');
        }
        else {
          this.loginError = 'Username or Password is incorrect';
          console.log(this.loginError);
        }
      })
    );
  }


  register(){
    this.loginError = '';
    if (this.temp !== this.user.password){
      this.loginError = 'Passwords does not match';
      console.log(this.loginError);
    }
    else{
      console.log(this.user);
      console.log(this.temp);
      this.loginService.findByName(this.user.username).subscribe(
        (res => {
          if (res == null){
            console.log((res));
            this.loginService.create(this.user).subscribe(
              ( res => {
                this.user = res;

                this.router.navigateByUrl('/');
              } )
            );
          }
          else {

            this.loginError = 'Username already taken, choose different username';
            console.log(this.loginError);
          }
        })
      );
    }
  }
}
