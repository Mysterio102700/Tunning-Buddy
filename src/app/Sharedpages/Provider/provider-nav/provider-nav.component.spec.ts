import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNavComponent } from './provider-nav.component';

describe('ProviderNavComponent', () => {
  let component: ProviderNavComponent;
  let fixture: ComponentFixture<ProviderNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderNavComponent]
    });
    fixture = TestBed.createComponent(ProviderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
