import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {

  authors: Author[] = [];
  sub: Subscription;
  selectedAuthor: Author;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.sub = this.authorService.getAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onEdit(author: Author) {
    this.selectedAuthor = this.selectedAuthor === author ? null : author;
  }
  onDelete(event: Event, author: Author) {
    event.stopPropagation();
    console.log("Author id", author._id);
    this.authorService.deleteAuthor(author._id).subscribe(data => {
      console.log("deleted author", data);
      this.authors = this.authors.filter(author => author._id !== data._id);
    })
  }
}
