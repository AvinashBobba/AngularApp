import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingprojectsComponent } from './upcomingprojects.component';

describe('UpcomingprojectsComponent', () => {
  let component: UpcomingprojectsComponent;
  let fixture: ComponentFixture<UpcomingprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
