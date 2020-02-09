import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountriesinfoComponent } from './allcountriesinfo.component';

describe('AllcountriesinfoComponent', () => {
  let component: AllcountriesinfoComponent;
  let fixture: ComponentFixture<AllcountriesinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcountriesinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcountriesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
