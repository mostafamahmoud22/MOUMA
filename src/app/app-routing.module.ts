import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'products' , component : ProductsComponent},
  {path: 'orders' , component : MyOrdersComponent},
  {path: 'admin/products' , component : ProductsComponent},
  {path: 'admin/orders' , component : AdminOrdersComponent},
  {path: 'shopping' , component : ShoppingCartComponent},
  {path: 'login' , component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
