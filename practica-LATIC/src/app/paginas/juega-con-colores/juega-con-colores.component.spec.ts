import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegaConColoresComponent } from './juega-con-colores.component';

describe('JuegaConColoresComponent', () => {
  let component: JuegaConColoresComponent;
  let fixture: ComponentFixture<JuegaConColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegaConColoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegaConColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
