import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfObservableComponent } from './of-observable.component';

describe('OfObservableComponent', () => {
  let component: OfObservableComponent;
  let fixture: ComponentFixture<OfObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
