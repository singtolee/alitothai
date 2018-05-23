import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedWebviewComponent } from './embed-webview.component';

describe('EmbedWebviewComponent', () => {
  let component: EmbedWebviewComponent;
  let fixture: ComponentFixture<EmbedWebviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedWebviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedWebviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
