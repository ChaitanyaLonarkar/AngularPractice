import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCom } from './first-com';

describe('FirstCom', () => {
  let component: FirstCom;
  let fixture: ComponentFixture<FirstCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
