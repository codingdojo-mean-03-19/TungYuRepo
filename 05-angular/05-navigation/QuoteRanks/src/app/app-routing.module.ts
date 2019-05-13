import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromAuthors from './Author';
import * as fromQuotes from './Quotes';

const routes: Routes = [
  { path: '', component: fromAuthors.AuthorListComponent },
  { path: 'new', component: fromAuthors.AuthorNewComponent },
  { path: 'edit/:author_id', component: fromAuthors.AuthorEditComponent },
  { path: 'quotes/:author_id', component: fromQuotes.QuoteListComponent },
  { path: 'newQuote/:author_id', component: fromQuotes.QuoteNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

