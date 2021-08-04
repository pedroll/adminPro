import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {Graficas1Component} from './graficas1.component';

describe('Graficas1Component', () => {
  let component: Graficas1Component;
  let fixture: ComponentFixture<Graficas1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Graficas1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graficas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
