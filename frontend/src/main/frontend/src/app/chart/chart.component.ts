import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class LineChartDemoComponent implements OnInit{
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 4, 5, 4], label: 'Series A'},
  ];
  public lineChartLabels:Array<any> = ['1. January', '1. February', '1. March', 'April', 'May', 'June', 'July', 'July', 'July', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnInit(){
    let timer = Observable.timer(1000,1000);
    timer.subscribe(t=>
      console.log('Olla'),
      // TODO dorobiť volanie servisu => aktualizovať lineChartData a aj lineChartLabels
      );
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
