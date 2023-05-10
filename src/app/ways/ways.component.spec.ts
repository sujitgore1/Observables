import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysComponent } from './ways.component';

describe('WaysComponent', () => {
  let component: WaysComponent;
  let fixture: ComponentFixture<WaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
