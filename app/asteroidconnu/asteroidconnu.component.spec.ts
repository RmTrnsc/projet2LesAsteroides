import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidconnuComponent } from './asteroidconnu.component';

describe('AsteroidconnuComponent', () => {
  let component: AsteroidconnuComponent;
  let fixture: ComponentFixture<AsteroidconnuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidconnuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
