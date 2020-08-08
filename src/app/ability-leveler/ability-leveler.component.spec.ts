import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityLevelerComponent } from './ability-leveler.component';

describe('AbilityLevelerComponent', () => {
  let component: AbilityLevelerComponent;
  let fixture: ComponentFixture<AbilityLevelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityLevelerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityLevelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
