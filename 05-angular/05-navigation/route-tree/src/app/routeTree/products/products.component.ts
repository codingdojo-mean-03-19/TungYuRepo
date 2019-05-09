import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private routeTreeService: RouteTreeService) { }

  ngOnInit() {
  }

}
