import {Component, OnInit} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Mark} from "./mark.model";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "./mark.service";
import {Image} from "../Image/image.model";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit, AfterViewInit {
  marks: Mark[];
  images: Image[];

  constructor(private markService: MarkService) {
  }

  ngAfterViewInit(){
      console.log('View');
      this.loadAll();
  }

  loadAll() {
    this.markService.query().subscribe(
      (res => {this.marks = res;
      console.log(this.marks);})
    )
  }

  deleteMark(index) {

    console.log('Vypis');
    this.markService.delete(this.marks[index].id).subscribe((res) => {
      this.loadAll();
    });

  }

  ngOnInit() {
    this.loadAll();
  }
}
