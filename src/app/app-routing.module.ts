import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Orders/product/product.component';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Orders/product-details/product-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { AddProductComponent } from './Orders/add-product/add-product.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/Home', pathMatch: 'full'}, // Defualt
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: ProductComponent},
    {path: 'Products/:id', component: ProductDetailsComponent},
    {path: 'Product/add', component: AddProductComponent},
    {path: 'Orders', component: OrderMasterComponent, canActivate:[AuthGuard]},
  ]},
  {path: 'Login', component: LoginComponent},
  {path: 'Logout', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
