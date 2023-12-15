import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcanComponent } from './postcan.component';

describe('PostcanComponent', () => {
  let component: PostcanComponent;
  let fixture: ComponentFixture<PostcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
