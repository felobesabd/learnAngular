import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/Models/icategory';
import { Iproduct } from 'src/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';
import { StaticProductService } from 'src/app/Services/static-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  // prodList: Iproduct[];
  filterPrdCat: Iproduct[] = [];

  totalPrices: number = 0;
  @Input() catIDSelected: number = 0;
  @Output() totalPriceChange: EventEmitter<number>;
  orderDate: Date = new Date();

  constructor(private ser: ProductsService, private router: Router) {

    this.totalPriceChange = new EventEmitter<number>();

    // this.prodList = [
    //   {id: 1, name: "Samsung lap", price: 7100, quantity: 0, cateID: 1, imgUrl:"https://picsum.photos/200/100"},
    //   {id: 1, name: "Lenovo lap", price: 5000, quantity: 3300, cateID: 1},
    //   {id: 1, name: "Apple lap", price: 10000, quantity: 200, cateID: 1, imgUrl:"https://picsum.photos/200/100"},
    //   {id: 2, name: "Samsung phone", price: 13000, quantity: 100, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
    //   {id: 2, name: "Oppo phone", price: 8000, quantity: 200, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
    //   {id: 2, name: "Apple phone", price: 23000, quantity: 800, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
    // ];
    // this.filterPrdCat = this.prodList;
  }

  ngOnInit(): void {
    this.ser.getAllProducts().subscribe(products=> {
      this.filterPrdCat = products;
    });
  }

  buy(price: number, count: string) {
    this.totalPrices += parseInt(count) * price;
    this.totalPriceChange.emit(this.totalPrices);
  }

  backDefault() {
    this.catIDSelected = 0;
  }

  trackByFn(index: number, prod:Iproduct): number {
    return prod.id;
  }

  // filterFn() {
  //   if (this.catIDSelected == 0) {
  //     this.filterPrdCat = this.prodList;
  //   } else {
  //     this.filterPrdCat = this.prodList.filter(item => item.cateID == this.catIDSelected);
  //   }
  // }

  productDetails(prodId: number){
    this.router.navigate(['/Products/', prodId]);
  }

  ngOnChanges(): void {
    // this.filterFn();
    this.ser.getProductByCatID(this.catIDSelected).subscribe(products=> {
      this.filterPrdCat = products;
    });
  }

}
