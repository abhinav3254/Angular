import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCallComponent } from './function-call.component';

describe('FunctionCallComponent', () => {
  let component: FunctionCallComponent;
  let fixture: ComponentFixture<FunctionCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionCallComponent]
    });
    fixture = TestBed.createComponent(FunctionCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
