import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEntrepriseComponent } from './menu-entreprise.component';

describe('MenuEntrepriseComponent', () => {
  let component: MenuEntrepriseComponent;
  let fixture: ComponentFixture<MenuEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
