import { Injectable } from '@angular/core';
import { Iproduct } from 'src/Models/iproduct';

@Injectable({
  providedIn: 'root'
})

export class StaticProductService {

  private prodList: Iproduct[];

  constructor() {
    this.prodList = [
      {id: 100, name: "Samsung lap", price: 7100, quantity: 0, cateID: 1, imgUrl:"https://picsum.photos/200/100"},
      {id: 200, name: "Lenovo lap", price: 5000, quantity: 3300, cateID: 1},
      {id: 300, name: "Apple lap", price: 10000, quantity: 200, cateID: 1, imgUrl:"https://picsum.photos/200/100"},
      {id: 400, name: "Samsung phone", price: 13000, quantity: 100, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
      {id: 500, name: "Oppo phone", price: 8000, quantity: 200, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
      {id: 600, name: "Apple phone", price: 23000, quantity: 800, cateID: 2, imgUrl:"https://picsum.photos/200/100"},
    ];
  }

  getAllProduct(): Iproduct[] {
    return this.prodList;
  }

  getCategoryByProd(cateID: number): Iproduct[] {
    if (cateID == 0) {
      return this.prodList;
    } else {
      return this.prodList.filter(e => e.cateID == cateID);
    }
  }

  getProductById(prdId: number): Iproduct | null {
    let foundId = this.prodList.find(e => e.id == prdId);
    return foundId ? foundId : null;
  }

  getAllId(): number[] {
    let allId = this.prodList.map((e)=> e.id);
    return allId;
  }
}
