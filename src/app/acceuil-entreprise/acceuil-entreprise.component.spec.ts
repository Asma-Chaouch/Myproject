import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilEntrepriseComponent } from './acceuil-entreprise.component';

describe('AcceuilEntrepriseComponent', () => {
  let component: AcceuilEntrepriseComponent;
  let fixture: ComponentFixture<AcceuilEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
