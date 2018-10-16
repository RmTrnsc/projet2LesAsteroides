import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidceintureComponent } from './asteroidceinture.component';

describe('AsteroidceintureComponent', () => {
  let component: AsteroidceintureComponent;
  let fixture: ComponentFixture<AsteroidceintureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidceintureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidceintureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
