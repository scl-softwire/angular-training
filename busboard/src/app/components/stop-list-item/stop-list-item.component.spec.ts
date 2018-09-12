import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopListItemComponent } from './stop-list-item.component';

describe('StopListItemComponent', () => {
  let component: StopListItemComponent;
  let fixture: ComponentFixture<StopListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
