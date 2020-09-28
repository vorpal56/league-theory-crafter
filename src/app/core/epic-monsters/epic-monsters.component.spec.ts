import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpicMonstersComponent } from './epic-monsters.component';

describe('EpicMonstersComponent', () => {
  let component: EpicMonstersComponent;
  let fixture: ComponentFixture<EpicMonstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpicMonstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpicMonstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
