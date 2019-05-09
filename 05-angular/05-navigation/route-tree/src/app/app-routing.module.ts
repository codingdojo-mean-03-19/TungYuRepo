import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromRoutTree from './routeTree';
import * as fromProducts from './routeTree/products';
import * as fromReviews from './routeTree/reviews';

const routes: Routes = [
  { path: 'products', component: fromRoutTree.ProductsComponent, children: [
    { path: 'details/:id', component: fromProducts.DetailsComponent },
    { path: 'brand/:brand', component: fromProducts.BrandComponent },
    { path: 'category/:cat', component: fromProducts.CategoryComponent }]
},
{ path: 'reviews', component: fromRoutTree.ReviewsComponent, children: [
    { path: 'details/:id', component: fromReviews.ReviewDetailsComponent },
    { path: 'author/:id', component: fromReviews.AuthorComponent },
    { path: 'all/:id', component: fromReviews.AllComponent }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
