import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesComponent } from './runes.component';

describe('RunesComponent', () => {
  let component: RunesComponent;
  let fixture: ComponentFixture<RunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
