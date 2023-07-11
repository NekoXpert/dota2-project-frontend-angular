import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoUpdateComponent } from './torneo-update.component';

describe('TorneoUpdateComponent', () => {
  let component: TorneoUpdateComponent;
  let fixture: ComponentFixture<TorneoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneoUpdateComponent]
    });
    fixture = TestBed.createComponent(TorneoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
