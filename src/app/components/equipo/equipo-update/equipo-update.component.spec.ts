import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoUpdateComponent } from './equipo-update.component';

describe('EquipoUpdateComponent', () => {
  let component: EquipoUpdateComponent;
  let fixture: ComponentFixture<EquipoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoUpdateComponent]
    });
    fixture = TestBed.createComponent(EquipoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
