import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit
} from '@angular/core';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {Event2} from "../Mark/event.model";
import {MarkService} from "../Mark/mark.service";
import {Mark} from "../Mark/mark.model";
import {EventService} from "../Mark/event.service";
import {falseIfMissing} from "protractor/built/util";

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'mwl-demo-component',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['styles.css'],
    templateUrl: 'template.html'
})
export class DemoComponent implements OnInit {
    @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';

    viewDate: Date = new Date();

    marks: Mark[];
    eventParse: Event2[];

    modalData: {
        action: string;
        event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [
    ];

    activeDayIsOpen: boolean = true;

    constructor(private modal: NgbModal,
                private markService: MarkService,
                private eventService: EventService) {}

    ngOnInit() {

      this.eventService.query().subscribe(
        (res => {
          if (res !=null){
            this.eventParse = res;
            for (let i=0; i<this.eventParse.length; i++){
              this.events.push({
                id: this.eventParse[i].id,
                title: this.eventParse[i].title,
                color: {
                  primary: this.eventParse[i].colorPrim,
                  secondary: this.eventParse[i].colorSec
                },
                actions: this.actions,
                start: new Date(this.eventParse[i].starting),
                end: new Date(this.eventParse[i].ending),
                draggable: false,
                resizable: {
                  beforeStart: false,
                  afterEnd: false
                }
              });
              this.refresh.next();
            }

            for (let i=0; i<this.eventParse.length; i++) {
              let startDate = new Date(this.eventParse[i].starting);
              let endDate = new Date(this.eventParse[i].ending);
              while (startDate.getFullYear() !== new Date().getFullYear()+3 && this.eventParse[i].repeat !==0 ) {
                startDate = addDays(startDate,this.eventParse[i].repeat);
                endDate = addDays(endDate,this.eventParse[i].repeat);
                this.events.push(
                  {
                    id: this.eventParse[i].id,
                    title: this.eventParse[i].title,
                    color: {
                      primary: this.eventParse[i].colorPrim,
                      secondary: this.eventParse[i].colorSec
                    },
                    actions: this.actions,
                    start: startDate,
                    end: endDate,
                    draggable: false,
                    resizable: {
                      beforeStart: false,
                      afterEnd: false
                    }
                  }
                )
              }
            }
          }
        })
      )
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventTimesChanged({
                          event,
                          newStart,
                          newEnd
                      }: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    }

    handleEvent(action: string, event: CalendarEvent): void {
        // this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(): void {
        this.events.push({
            title: 'New event',
            start: startOfDay(new Date()),
            end: endOfDay(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    }
}
