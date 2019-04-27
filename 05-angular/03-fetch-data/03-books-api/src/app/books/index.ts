import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { from } from 'rxjs';

export const components: any[] = [
  BookDetailsComponent,
  BookListComponent,
  BookNewComponent,
];

export * from './book-details/book-details.component';
export * from './book-list/book-list.component';
export * from './book-new/book-new.component';
