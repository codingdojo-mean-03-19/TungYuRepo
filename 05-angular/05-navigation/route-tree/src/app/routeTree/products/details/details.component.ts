import { Component, OnInit } from '@angular/core';
import { RouteTreeService } from '../../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  parameter: String;
  constructor(private routeTreeService: RouteTreeService,
    private readonly Activated: ActivatedRoute
    ) { }

  ngOnInit() {
    this.parameter = this.Activated.snapshot.paramMap.get('id');
    console.log(this.parameter);
  }

}
