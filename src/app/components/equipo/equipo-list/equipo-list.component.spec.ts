import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoListComponent } from './equipo-list.component';

describe('EquipoListComponent', () => {
  let component: EquipoListComponent;
  let fixture: ComponentFixture<EquipoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipoListComponent]
    });
    fixture = TestBed.createComponent(EquipoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
