import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvePageComponent } from './involve-page.component';

describe('InvolvePageComponent', () => {
  let component: InvolvePageComponent;
  let fixture: ComponentFixture<InvolvePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
