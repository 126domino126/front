import {Component, OnInit} from '@angular/core';
import { AfterViewInit } from '@angular/core';

import {Image} from "../Image/image.model";
import {AppUserService} from "../login/appUser.service";
import {AppUser} from "../login/appUser.model";
import {Mark} from "../Mark/mark.model";
import {MarkService} from "../Mark/mark.service";

@Component({
  selector: 'app-mark',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
export class FavsComponent implements OnInit, AfterViewInit {
  marks: Mark[];
  images: Image[];

  user: AppUser = new AppUser('', '');

  constructor(private markService: MarkService,
              private appUserService: AppUserService) {
    this.user = this.appUserService.getUserNow();
  }

  ngAfterViewInit(){
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
          for (let i=0; i<this.marks.length; i++){
            if (!this.marks[i].favourite){
              this.marks.splice(i,1);
            }
          }
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
    if (this.user !== null){
      if (this.user.id !== undefined && this.user.id !== null){
        this.loadAll();
      }
    }
  }
}
