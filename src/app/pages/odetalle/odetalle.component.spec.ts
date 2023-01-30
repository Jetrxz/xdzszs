import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdetalleComponent } from './odetalle.component';

describe('OdetalleComponent', () => {
  let component: OdetalleComponent;
  let fixture: ComponentFixture<OdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
