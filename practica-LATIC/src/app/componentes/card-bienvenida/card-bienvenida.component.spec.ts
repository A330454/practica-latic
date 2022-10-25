import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBienvenidaComponent } from './card-bienvenida.component';

describe('CardBienvenidaComponent', () => {
  let component: CardBienvenidaComponent;
  let fixture: ComponentFixture<CardBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
