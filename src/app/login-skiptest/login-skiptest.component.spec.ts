import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginSkiptestComponent} from './login-skiptest.component';

describe('LoginSkiptestComponent', () => {
  let component: LoginSkiptestComponent;
  let fixture: ComponentFixture<LoginSkiptestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSkiptestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSkiptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
