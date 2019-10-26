import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgresComponent} from './progres.component';

describe('ProgresComponent', () => {
  let component: ProgresComponent;
  let fixture: ComponentFixture<ProgresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
