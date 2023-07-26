import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {

  cateList: Icategory[];

  selectedCatID: number = 0;
  totalPrices: number = 0;
  // clientEleInp: ElementRef = new ElementRef();
  // clientEleInp: ElementRef = {} as ElementRef;
  // clientEleInp: ElementRef | undefined = undefined;
  // clientEleInp: ElementRef | null = null;
  // clientEleInp?: ElementRef
  @ViewChild('clientNameInp') clientEleInp!: ElementRef;

  constructor() {
    this.cateList= [
      {id: 1, name: "Laptops"},
      {id: 2, name: "Mobils"},
    ]
  }


  prices(val:number) {
    this.totalPrices = val;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.clientEleInp.nativeElement.value = "Enter Your Name";
    this.clientEleInp.nativeElement.style.border = '2px solid darkblue';
  }

}
