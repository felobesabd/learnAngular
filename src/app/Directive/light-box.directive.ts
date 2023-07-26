import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {

  @Input('LightBox') highLight:string = 'gray';
  @Input() defualtColor:string = 'darkblue';

  constructor(private eleRef: ElementRef) {
    // this.eleRef.nativeElement.style.border = `2px solid ${this.defualtColor}`;
  }

  ngOnChanges(): void {
    this.eleRef.nativeElement.style.border = `2px solid ${this.defualtColor}`;
  }

  @HostListener('mouseover') onMouseOver(){
    this.eleRef.nativeElement.style.border = `2px solid ${this.highLight}`;
  };

  @HostListener('mouseout') onMouseOut (){
    this.eleRef.nativeElement.style.border = `2px solid ${this.defualtColor}`;
  };

}
