import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonViewer } from './person-viewer';

describe('PersonViewer', () => {
  let component: PersonViewer;
  let fixture: ComponentFixture<PersonViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
