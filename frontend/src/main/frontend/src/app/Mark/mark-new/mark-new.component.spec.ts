import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkNewComponent } from './mark-new.component';

describe('MarkNewComponent', () => {
  let component: MarkNewComponent;
  let fixture: ComponentFixture<MarkNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
