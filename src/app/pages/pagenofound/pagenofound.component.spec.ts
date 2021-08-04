import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PagenofoundComponent} from './pagenofound.component';

describe('PagenofoundComponent', () => {
  let component: PagenofoundComponent;
  let fixture: ComponentFixture<PagenofoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PagenofoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
