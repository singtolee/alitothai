import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBarComponent } from './api-bar.component';

describe('ApiBarComponent', () => {
  let component: ApiBarComponent;
  let fixture: ComponentFixture<ApiBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
