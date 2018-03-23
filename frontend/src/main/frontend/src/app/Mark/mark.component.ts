import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Mark} from "./mark.model";
import {EventManager} from "@angular/platform-browser";
import {MarkService} from "./mark.service";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  marks: Mark[];
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(private markService: MarkService,
              // private dataUtils: DataUtils,
              private eventManager: EventManager) {
  }

  loadAll() {
    this.markService.query().subscribe(
      (res => this.marks = res)
    );
  }

  ngOnInit() {
    this.loadAll();
    // this.registerChangeInMarks();
  }

  // ngOnDestroy() {
  //   this.eventManager.destroy(this.eventSubscriber);
  // }

  trackId(index: number, item: Mark) {
    return item.id;
  }

  // byteSize(field) {
  //   return this.dataUtils.byteSize(field);
  // }
  //
  // openFile(contentType, field) {
  //   return this.dataUtils.openFile(contentType, field);
  // }
  // registerChangeInMarks() {
  //   this.eventSubscriber = this.eventManager.subscribe('markListModification', (response) => this.loadAll());
  // }

  private onError(error) {
    console.log(error.message, null, null);
  }
}
