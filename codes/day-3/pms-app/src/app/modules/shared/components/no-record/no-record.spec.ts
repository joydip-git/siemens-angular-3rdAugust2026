import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecord } from './no-record';

describe('NoRecord', () => {
  let component: NoRecord;
  let fixture: ComponentFixture<NoRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRecord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
