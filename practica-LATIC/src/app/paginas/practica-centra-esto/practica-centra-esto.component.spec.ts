import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaCentraEstoComponent } from './practica-centra-esto.component';

describe('PracticaCentraEstoComponent', () => {
  let component: PracticaCentraEstoComponent;
  let fixture: ComponentFixture<PracticaCentraEstoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticaCentraEstoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaCentraEstoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
