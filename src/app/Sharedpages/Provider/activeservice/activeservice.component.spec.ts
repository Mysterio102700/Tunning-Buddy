import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveserviceComponent } from './activeservice.component';

describe('ActiveserviceComponent', () => {
  let component: ActiveserviceComponent;
  let fixture: ComponentFixture<ActiveserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveserviceComponent]
    });
    fixture = TestBed.createComponent(ActiveserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
