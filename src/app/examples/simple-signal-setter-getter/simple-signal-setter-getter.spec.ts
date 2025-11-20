import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSignalSetterGetter } from './simple-signal-setter-getter';

describe('SimpleSignalSetterGetter', () => {
  let component: SimpleSignalSetterGetter;
  let fixture: ComponentFixture<SimpleSignalSetterGetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSignalSetterGetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSignalSetterGetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
