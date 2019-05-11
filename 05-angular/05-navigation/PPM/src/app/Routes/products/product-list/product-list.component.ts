import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Models/Product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  sub: Subscription;
  selectedProduct: Product
  constructor( private readonly productService: ProductService) { }

  ngOnInit() {
    console.log('Success');
    this.sub = this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onEdit(product: Product) {
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }
  onDelete(event: Event, pro: Product){
    event.preventDefault();
    console.log(pro._id);
    this.productService.deleteProduct(pro._id).subscribe(data => {
    console.log(data);
    this.products = this.products.filter(pro => pro._id !== data._id);
    })
  }
}
