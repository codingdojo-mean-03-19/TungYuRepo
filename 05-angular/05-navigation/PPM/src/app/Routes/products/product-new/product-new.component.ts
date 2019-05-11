import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../Service';
import { Product } from '../../../Models/Product.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = new Product();

  // @Output()
  // createdProduct = new EventEmitter<Product>();

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log('Submitting new product', this.product);
    this.productService.createProduct(this.product).subscribe(data => {
      this.product = data;
      this.router.navigateByUrl('products');
    })
    form.reset();
  }
  onClick(event: Event){
    event.preventDefault();
    console.log('canceling...');
    this.router.navigateByUrl('products');
  }
}
