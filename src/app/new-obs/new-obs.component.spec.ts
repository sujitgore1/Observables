import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObsComponent } from './new-obs.component';

describe('NewObsComponent', () => {
  let component: NewObsComponent;
  let fixture: ComponentFixture<NewObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
