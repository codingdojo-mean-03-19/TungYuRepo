import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {

  author = new Author();

  @Output()
  createdAuthor = new EventEmitter<Author>();

  constructor(
    private readonly bookService: AuthorService,
    private readonly router: Router ) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm): void{
    event.preventDefault();
    console.log('Submiting new author', this.author);
    this.bookService.createAuthor(this.author).subscribe(data => {
    console.log(data);
    this.author = data;
    console.log(this.author, 'dkjdkjdk');
    this.router.navigateByUrl('/');
    })
    form.reset();
  }
}
