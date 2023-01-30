import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAchatbotComponent } from './iachatbot.component';

describe('IAchatbotComponent', () => {
  let component: IAchatbotComponent;
  let fixture: ComponentFixture<IAchatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAchatbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
