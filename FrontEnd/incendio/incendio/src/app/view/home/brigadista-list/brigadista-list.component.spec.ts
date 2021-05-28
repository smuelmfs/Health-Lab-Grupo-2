import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigadistaListComponent } from './brigadista-list.component';

describe('BrigadistaListComponent', () => {
  let component: BrigadistaListComponent;
  let fixture: ComponentFixture<BrigadistaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrigadistaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
