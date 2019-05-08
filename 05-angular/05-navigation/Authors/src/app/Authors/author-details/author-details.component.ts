import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  @Output()
  updatedAuthor = new EventEmitter<Author>();

  @Input()
  author: Author;

  constructor(
    private readonly authorService: AuthorService,
    private readonly router: Router,
    private readonly activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.paramMap
      .pipe(
        map(params => params.get('author_id')),
        switchMap(id => this.authorService.getAuthor(id))
      )
      .subscribe(author => (this.author = author));
  }
  onUpdate(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('updating ', this.author);
    this.authorService.editAuthor(this.author)
      .subscribe(author => {
        console.log('updated ', author);
        this.router.navigateByUrl('/')
      })
    form.reset();
  }
}
