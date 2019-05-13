import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../../Services/author.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';

//Table
import { Author } from '../../Models';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {

  authors: Author[] = [];
  sub: Subscription;

  constructor(
    private readonly authorService:AuthorService
    ) { }

    ngOnInit() {
      this.sub = this.authorService.getAuthors().subscribe(data => {
        console.log(data);
        this.authors = data;
      })
    }

    ngOnDestroy(): void {
      console.log('ng on Delete');
      this.sub.unsubscribe();
    }

}
