import { Component, OnInit } from '@angular/core';
import {Scanner2Service} from "../../QRcodeScan/scanner2.service";
import {AppUser} from "../../login/appUser.model";
import {AppUserService} from "../../login/appUser.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: AppUser;

  constructor( private scanner2Service: Scanner2Service,
               private appUserService: AppUserService) { }

  ngOnInit() {
    this.scanner2Service.setState('scan');
    this.user = this.appUserService.getUserNow();
  }

}
