import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoIngresoComponent } from './listado-ingreso.component';

describe('ListadoIngresoComponent', () => {
  let component: ListadoIngresoComponent;
  let fixture: ComponentFixture<ListadoIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoIngresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
