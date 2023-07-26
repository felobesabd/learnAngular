import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/Models/iproduct';
import { StaticProductService } from 'src/app/Services/static-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prodId: number = 0;
  prodList: Iproduct | null = null;
  arrId: number[] = [];

  constructor(private activatedRoute: ActivatedRoute, private ser: StaticProductService,
    private location: Location, private router: Router) {
    ;
  }

  ngOnInit(): void {
    // this.prodId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // // console.log(this.ser.getAllId());
    // this.prodList = this.ser.getProductById(this.prodId);
    this.arrId = this.ser.getAllId();
    this.activatedRoute.paramMap.subscribe((paramMap)=> {
      this.prodId = Number(paramMap.get('id'));
      this.prodList = this.ser.getProductById(this.prodId);;
    });
  }

  goBack() {
    this.location.back();
  }

  goPrev(){
    let arrIndex = this.arrId.findIndex((e) => e == this.prodId)
    let prevArrId;
    if (arrIndex > 0) {
      prevArrId = this.arrId[arrIndex - 1];
      this.router.navigate(['Products/', prevArrId]);
    };
    console.log(prevArrId);
  }

  goNext(){
    let arrIndex = this.arrId.findIndex((e) => e == this.prodId)
    let nextArrId;
    if (arrIndex < this.arrId.length) {
      nextArrId = this.arrId[arrIndex + 1];
      this.router.navigate(['Products/', nextArrId]);
    };
    console.log(nextArrId);
  }
}
