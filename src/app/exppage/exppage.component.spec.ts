import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExppageComponent } from './exppage.component';

describe('ExppageComponent', () => {
  let component: ExppageComponent;
  let fixture: ComponentFixture<ExppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
