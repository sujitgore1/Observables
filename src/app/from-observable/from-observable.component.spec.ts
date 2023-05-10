import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromObservableComponent } from './from-observable.component';

describe('FromObservableComponent', () => {
  let component: FromObservableComponent;
  let fixture: ComponentFixture<FromObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
