import {Component, OnInit} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {Mark} from "./mark.model";
import {MarkService} from "./mark.service";
import {Image} from "../Image/image.model";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {AppUserService} from "../login/appUser.service";
import {AppUser} from "../login/appUser.model";
import {Scanner2Service} from "../QRcodeScan/scanner2.service";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit, AfterViewInit {
  marks: Mark[];
  images: Image[];

  user: AppUser = new AppUser('', '');
  constructor(private markService: MarkService,
              private appUserService: AppUserService,
              private scanner2Service: Scanner2Service) {
    this.user = this.appUserService.getUserNow();
    console.log(this.user);
  }

  ngAfterViewInit(){
    console.log(this.user);
    console.log(this.user.id);

    if (this.user !== null){
      if (this.user.id !== undefined && this.user.id !== null){
        this.loadAll();
      }
    }

  }

  loadAll() {
    this.markService.findByUser(this.user.id).subscribe(
      (res => {
        if (res !=null){
          this.marks = res;
          console.log(this.marks);
        }
      })
    )
  }

  deleteMark(index) {
    this.markService.delete(this.marks[index].id).subscribe((res) => {
      this.loadAll();
    });
  }

  ngOnInit() {
    this.scanner2Service.setState('new');
    if (this.user !== null){
      if (this.user.id !== undefined && this.user.id !== null){
        console.log('LOAD-ALL');
        this.loadAll();
      }
    }
  }
}
