import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private ser: ProductsService, private router: Router) {}

  ngOnInit(): void {}

  createProduct() {
    const prod: Iproduct = {
      id: 8,
      name: 'Redmi',
      price: 2000,
      quantity: 66,
      imgUrl: '',
      cateID: 3,
    };
    const observe = {
      next: (prod: Iproduct) => {
        alert('Done');
        this.router.navigateByUrl('/Products');
      },
      error: (err: Error) => {
        console.log('kkkkkkkkkkkk');
        alert(err.message);
      },
    };
    this.ser.createProduct(prod).subscribe(observe);
  }
}
