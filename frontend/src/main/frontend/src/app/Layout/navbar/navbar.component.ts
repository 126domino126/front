import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../login/appUser.model";
import {AppUserService} from "../../login/appUser.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse: boolean = true;

  user: AppUser = new AppUser('', '');
  subscription: Subscription;

  constructor(private appUserService: AppUserService) {
    this.subscription = this.appUserService.getUser().subscribe(user => {this.user = user});
  }

  ngOnInit() {
  }

  logout() {
    this.user = new AppUser('', '');
    this.appUserService.save(this.user);
  }
}
