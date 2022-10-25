import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrameCardComponent } from './centrame-card.component';

describe('CentrameCardComponent', () => {
  let component: CentrameCardComponent;
  let fixture: ComponentFixture<CentrameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
