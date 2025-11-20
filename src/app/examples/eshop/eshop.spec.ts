import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eshop } from './eshop';

describe('Eshop', () => {
  let component: Eshop;
  let fixture: ComponentFixture<Eshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eshop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eshop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
