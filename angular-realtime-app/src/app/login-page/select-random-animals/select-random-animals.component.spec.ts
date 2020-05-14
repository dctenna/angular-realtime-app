import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRandomAnimalsComponent } from './select-random-animals.component';

describe('SelectRandomAnimalsComponent', () => {
  let component: SelectRandomAnimalsComponent;
  let fixture: ComponentFixture<SelectRandomAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRandomAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRandomAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
