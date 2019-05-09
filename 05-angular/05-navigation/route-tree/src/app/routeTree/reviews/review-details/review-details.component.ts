import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../../services';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  constructor(private routeTreeService: RouteTreeService) { }

  ngOnInit() {
  }

}
