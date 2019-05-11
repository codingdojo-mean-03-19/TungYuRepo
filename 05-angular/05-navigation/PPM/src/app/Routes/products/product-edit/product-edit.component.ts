import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../Service';
import { Product } from '../../../Models/Product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Output()
  updatedProduct = new EventEmitter<Product>();

  @Input()
  product: Product;

  constructor(
    private readonly productService: ProductService,
    private readonly activatedR: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.activatedR.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.productService.getProduct(id))
    ).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
  onUpdate(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('updating ', this.product);
    this.productService.editProduct(this.product)
      .subscribe(data => {
        console.log('updated ', data);
        this.product = data;
        this.router.navigateByUrl('products')
      })
    form.reset();
  }
  onClick(event: Event){
    event.preventDefault();
    console.log('canceling...');
    this.router.navigateByUrl('products');
  }
}
