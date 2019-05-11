import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromRoutes from './Routes';
import * as fromProducts from './Routes/products';

const routes: Routes = [
  { path: '', component: fromRoutes.HomeComponent },
  { path: 'products', component: fromRoutes.ProductsComponent, children: [
      { path: 'edit/:id', component: fromProducts.ProductEditComponent },
      { path: '', component: fromProducts.ProductListComponent },
      { path: 'new', component: fromProducts.ProductNewComponent }]
  },
  // { path: 'reviews', component: ReviewComponent, children: [
  //     { path: 'details/:id', component: ReviewDetailComponent },
  //     { path: 'author/:id', component: AuthorComponent },
  //     { path: 'all/:id', component: AllreviewsComponent }]
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
