import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tepmforms } from './tepmforms';

describe('Tepmforms', () => {
  let component: Tepmforms;
  let fixture: ComponentFixture<Tepmforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tepmforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tepmforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
