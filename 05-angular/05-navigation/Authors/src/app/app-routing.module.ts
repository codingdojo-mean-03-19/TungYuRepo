import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromAuthor from './Authors';


const routes: Routes = [
  {
    path: '',
    component: fromAuthor.AuthorListComponent,
  },
  {
    path: 'author/new',
    component: fromAuthor.AuthorNewComponent,
  },
  {
    path: 'author/:author_id',
    component: fromAuthor.AuthorDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
