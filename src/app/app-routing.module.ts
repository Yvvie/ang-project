import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { OrderPreviewComponent } from './components/order-preview/order-preview.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  { path: 'products' , component: ProductsComponent},
  { path: 'credit-card' , component: CreditCardComponent},
  { path: 'order-preview' , component: OrderPreviewComponent},
  { path: 'completed' , component: CompletedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  ProductsComponent,
  CreditCardComponent,
  OrderPreviewComponent,
  CompletedComponent
]
