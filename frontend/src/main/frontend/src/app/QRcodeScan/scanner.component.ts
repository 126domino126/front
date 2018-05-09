import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {Router} from "@angular/router";
import {ScannerService} from "./scannerservice";
import {MarkService} from "../Mark/mark.service";
import {Scanner2Service} from "./scanner2.service";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScannerComponent implements OnInit {

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;

  constructor(private  router: Router,
              private scannerService: ScannerService,
              private scanner2Service: Scanner2Service,
              private markService: MarkService){
  }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log("component: " + result);
      this.scannerService.save(result);
      console.log(result);
      if (this.scanner2Service.getState() === 'new')
        this.router.navigateByUrl('/marks/new');
      if (this.scanner2Service.getState() === 'scan'){
        this.markService.findByQr(result).subscribe(
          (res => {
            console.log(res);
            console.log('/marks/edit/'+ res.id);
            if (res !=null){
              this.router.navigateByUrl('/marks/edit/'+ res.id);
            }
            else{
              this.router.navigateByUrl('/marks/new');
            }
          })
        );

      }
    });
  }
}
