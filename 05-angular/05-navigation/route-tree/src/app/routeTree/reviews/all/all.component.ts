import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../../services';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private routeTreeService: RouteTreeService) { }

  ngOnInit() {
  }

}
