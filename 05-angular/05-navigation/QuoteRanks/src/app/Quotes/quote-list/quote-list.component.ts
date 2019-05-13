import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthorService } from '../../Services';
import { QuoteService } from '../../Services';
import { Author } from '../../Models';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  authors: Author;
  authorId: String;

  constructor(
    private readonly quoteService: QuoteService,
    private readonly authorService: AuthorService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.authors = {} as any;
    console.log('Calling author');
    this.activatedRoute.paramMap
    .pipe(
      map(params => params.get('author_id')),
      switchMap(id => this.authorService.getAuthor(id))
    ).subscribe(data => {
      this.authors = data;
      this.authorId = data._id;
      console.log(this.authors)
    })
  }
  onDelete(quote: Author){
    this.quoteService.deleteQuote(this.authorId, quote._id).subscribe(data => {
      console.log(data);
      this.authors = data;
      this.router.navigateByUrl(`/quotes/${this.authorId}`);
    })
  }
  onVote(quote: Author){
    this.quoteService.editQuote(this.authorId, quote._id, 1).subscribe(data => {
      console.log(data);
      this.onchange(data);
    })
  }
  onVoteDown(quote: Author){
    this.quoteService.editQuote(this.authorId, quote._id, -1).subscribe(data => {
      console.log(data);
      this.onchange(data);
    })
  }
  onchange(quote: Author) {
    console.log("onchange", quote)
    this.authors = quote;
  }
}
