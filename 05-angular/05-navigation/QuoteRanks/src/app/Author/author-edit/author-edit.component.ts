import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Author } from '../../Models';
import { AuthorService } from '../../Services/author.service';
@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author: Author;

  errors: String [] = [];

  constructor(
    private readonly authorService: AuthorService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.author = {} as any;
    this.activatedRoute.paramMap
    .pipe(
      map(params => params.get('author_id')),
      switchMap(id => this.authorService.getAuthor(id))
    )
    .subscribe(data => {
      this.author = data
      console.log('Got author', data);
    } )
  }

  onUpdate(event: Event, form: NgForm){
    event.preventDefault();
    console.log('Updating');
    this.authorService.updateAuthor(this.author).subscribe(data  => {
      console.log("Updated author", data);
      this.router.navigateByUrl('/');
    },
    err => {
      this.checkErrors(err.error);
    })
    form.reset();
  }
  private checkErrors(err: String[] | String){
    this.errors = Array.isArray(err) ? err : [err];
  }

}
