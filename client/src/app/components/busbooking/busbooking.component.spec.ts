import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BUSComponent } from './about.component';

describe('BUSComponent', () => {
  let component: BUSComponent;
  let fixture: ComponentFixture<BUSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BUSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
