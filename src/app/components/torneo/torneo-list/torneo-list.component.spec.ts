import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoListComponent } from './torneo-list.component';

describe('TorneoListComponent', () => {
  let component: TorneoListComponent;
  let fixture: ComponentFixture<TorneoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TorneoListComponent]
    });
    fixture = TestBed.createComponent(TorneoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
