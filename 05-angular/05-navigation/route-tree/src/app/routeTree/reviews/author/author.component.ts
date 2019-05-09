import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../../services';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private routeTreeService: RouteTreeService) { }

  ngOnInit() {
  }

}
