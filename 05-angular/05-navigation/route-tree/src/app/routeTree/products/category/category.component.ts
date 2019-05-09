import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  passedValue: String;
  constructor(private readonly Activated: ActivatedRoute) { }

  ngOnInit() {
    this.passedValue = this.Activated.snapshot.paramMap.get('cat');
  }

}
