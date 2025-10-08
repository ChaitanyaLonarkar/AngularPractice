import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChild } from './new-child';

describe('NewChild', () => {
  let component: NewChild;
  let fixture: ComponentFixture<NewChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
