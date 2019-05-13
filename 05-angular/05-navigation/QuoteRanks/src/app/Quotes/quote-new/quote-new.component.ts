import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

import { Author } from '../../Models';
import { AuthorService, QuoteService } from '../../Services';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  quote = new Author();
  errors: String[] = [];

  @Input()
  author: Author;

  constructor(
    private readonly authorService: AuthorService,
    private readonly quoteService: QuoteService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.author = { } as any;
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(data => {
        this.author = data;
        console.log('Author', this.author);
      })
  }
  onSubmit(event: Event, form: NgForm, author_id: String) {
    event.preventDefault();
    console.log('Submitting quote', this.quote);
    this.quoteService.postQuote(author_id, this.quote)
      .subscribe(quote => {
        console.log("New quote", quote);
        this.router.navigateByUrl(`/quotes/${author_id}`);
      },
        error => {
          console.log(error);
          this.handleErrors(error.error);
        })
    form.reset();
  }
  private handleErrors(errors: string[] | string) {
    this.errors = Array.isArray(errors) ? errors : [errors];
  }

}
