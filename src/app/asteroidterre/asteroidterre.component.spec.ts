import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidterreComponent } from './asteroidterre.component';

describe('AsteroidterreComponent', () => {
  let component: AsteroidterreComponent;
  let fixture: ComponentFixture<AsteroidterreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidterreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidterreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
