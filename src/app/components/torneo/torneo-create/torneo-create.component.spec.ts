import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoCreateComponent } from './torneo-create.component';

describe('TorneoCreateComponent', () => {
  let component: TorneoCreateComponent;
  let fixture: ComponentFixture<TorneoCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneoCreateComponent]
    });
    fixture = TestBed.createComponent(TorneoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
