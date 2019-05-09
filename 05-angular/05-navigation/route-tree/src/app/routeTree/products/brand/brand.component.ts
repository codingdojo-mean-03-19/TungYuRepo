import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private routeTreeService: RouteTreeService,
    private readonly Activated: ActivatedRoute) { }

  ngOnInit() {
    const id = this.Activated.snapshot.paramMap.get('brand');
    console.log(id);
  }

}
