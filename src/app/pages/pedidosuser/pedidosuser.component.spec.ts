import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosuserComponent } from './pedidosuser.component';

describe('PedidosuserComponent', () => {
  let component: PedidosuserComponent;
  let fixture: ComponentFixture<PedidosuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
