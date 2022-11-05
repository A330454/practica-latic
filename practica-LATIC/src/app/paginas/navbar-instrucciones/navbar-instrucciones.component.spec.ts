import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInstruccionesComponent } from './navbar-instrucciones.component';

describe('NavbarInstruccionesComponent', () => {
  let component: NavbarInstruccionesComponent;
  let fixture: ComponentFixture<NavbarInstruccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInstruccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInstruccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
