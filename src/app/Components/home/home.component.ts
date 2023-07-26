import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription, filter, map, of } from 'rxjs';
import { StoreData } from 'src/ViewModels/store-data';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  storeInfo: StoreData;
  imageToggle:boolean = true;
  private subscriptions: Subscription[] = [];

  constructor(private ser: PromotionAdsService) {
    this.storeInfo = new StoreData("ITI Store", "https://picsum.photos/400/200", ["Cairo", "Elminia", "Abo 3r3as"]);
  }

  ngOnInit(): void {
    // let adsSubscription = this.ser.getAdsList(3).subscribe({
    //   next:(data: string)=> {
    //     console.log(data)
    //   },
    //   error:(err: string)=> {
    //     console.log(err)
    //   },
    //   complete:()=> {
    //     console.log('Ads Finiched')
    //   },
    // })
    // this.subscriptions.push(adsSubscription)
    let observable = {
      next:(data: string)=> {
        console.log(data)
      },
      error:(err: string)=> {
        console.log(err)
      },
      complete:()=> {
        console.log('Ads Finiched')
      },
    }

    let filterObs = this.ser.getAdsOfAndFrom().pipe(
      filter(ad=> ad.includes("Black"))
      ,map(ad => "Ad: " + ad)
    )
    let sub = filterObs.subscribe(observable);
    this.subscriptions.push(sub);

    // let sub = this.ser.getAdsOfAndFrom().subscribe(ad=> {
    //   console.log(ad);
    // });
    // this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  toggleFunc = ()=> {
    this.imageToggle = !this.imageToggle;
  };

}
