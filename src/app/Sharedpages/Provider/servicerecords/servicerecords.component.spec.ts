import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerecordsComponent } from './servicerecords.component';

describe('ServicerecordsComponent', () => {
  let component: ServicerecordsComponent;
  let fixture: ComponentFixture<ServicerecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicerecordsComponent]
    });
    fixture = TestBed.createComponent(ServicerecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
