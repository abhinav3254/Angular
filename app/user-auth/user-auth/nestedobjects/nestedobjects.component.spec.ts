import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedobjectsComponent } from './nestedobjects.component';

describe('NestedobjectsComponent', () => {
  let component: NestedobjectsComponent;
  let fixture: ComponentFixture<NestedobjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedobjectsComponent]
    });
    fixture = TestBed.createComponent(NestedobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
