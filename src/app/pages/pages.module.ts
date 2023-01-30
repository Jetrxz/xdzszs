import { GoogleMapsModule} from '@angular/google-maps';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountHomeComponent } from './account-home/account-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAchatbotComponent } from './iachatbot/iachatbot.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { OdetalleComponent } from './odetalle/odetalle.component';
import { PedidosuserComponent } from './pedidosuser/pedidosuser.component';

const config: SocketIoConfig = { url: 'https://servidordenode-jetrxz.onrender.com', options: {} };

@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    ProductsComponent,
    AccountComponent,
    CartComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    AccountHomeComponent,
    CheckoutComponent,
    IAchatbotComponent,
    OdetalleComponent,
    PedidosuserComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    SocketIoModule.forRoot(config)
  ]
})
export class PagesModule { }
