import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPostulationComponent } from './ajout-postulation.component';

describe('AjoutPostulationComponent', () => {
  let component: AjoutPostulationComponent;
  let fixture: ComponentFixture<AjoutPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPostulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
