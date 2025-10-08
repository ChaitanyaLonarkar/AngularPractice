import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipestesting } from './pipestesting';

describe('Pipestesting', () => {
  let component: Pipestesting;
  let fixture: ComponentFixture<Pipestesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipestesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipestesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
