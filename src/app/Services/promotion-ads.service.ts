import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private adsList: string[];

  constructor() {
    this.adsList = ['Discount', 'free', '50% Discount', '', 'Black Friday', 'Black Season'];
  }

  // getAdsList(intervalSeconds: number): Observable<string> {
  //   return new Observable((obs) => {
  //     // obs.next()
  //     // obs.error()
  //     // obs.complete()
  //     let counter = 0;
  //     let adsTime = setInterval(() => {
  //       if (counter == this.adsList.length) {
  //         obs.complete();
  //       }
  //       // if (this.adsList[counter] == '') {
  //       //   obs.error('Error');
  //       // }
  //       obs.next(this.adsList[counter]);
  //       counter++;
  //     }, intervalSeconds * 1000);
  //     return {
  //       unsubscribe() {
  //         clearInterval(adsTime)
  //         console.log('Un Subscribe');
  //       }
  //   };
  //   });
  // }

  getAdsOfAndFrom(): Observable<string> {
    // return of('1', '3', '2');
    return from(this.adsList);
  }
}
