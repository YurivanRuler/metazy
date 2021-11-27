import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCreateFormComponent } from './movies-create-form.component';

describe('MoviesCreateFormComponent', () => {
  let component: MoviesCreateFormComponent;
  let fixture: ComponentFixture<MoviesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
