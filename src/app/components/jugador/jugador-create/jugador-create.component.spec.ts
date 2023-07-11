import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorCreateComponent } from './jugador-create.component';

describe('JugadorCreateComponent', () => {
  let component: JugadorCreateComponent;
  let fixture: ComponentFixture<JugadorCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadorCreateComponent]
    });
    fixture = TestBed.createComponent(JugadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
