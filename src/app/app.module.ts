import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Orders/product/product.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directive/light-box.directive';
import { USDtoEGPPipe } from './Pipe/usdto-egp.pipe';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Orders/product-details/product-details.component';
import { AddProductComponent } from './Orders/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    NotFoundComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
