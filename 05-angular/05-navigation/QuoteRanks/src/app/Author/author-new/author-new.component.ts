import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../Services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../Models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {

  author = new Author();
  errors: String[] = [];
  constructor(
    private readonly authorService: AuthorService,
    private readonly route: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    this.authorService.createAuthor(this.author).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl('/');
    },
    error => {
      return this.catchError(error.error);
    })
    form.reset();
  }
  private catchError(err: String[] | String){
    this.errors = Array.isArray(err) ? err : [err];
  }
}
