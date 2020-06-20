import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediaSingleComponent } from './view-media-single.component';

describe('ViewMediaSingleComponent', () => {
  let component: ViewMediaSingleComponent;
  let fixture: ComponentFixture<ViewMediaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMediaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMediaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
