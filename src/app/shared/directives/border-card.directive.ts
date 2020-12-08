import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  GREY_COLOR = "#C0C0C0";
  RED_COLOR = "#ff0000";

  @Input('appBorderCard') borderColor: any;
  constructor(private element:ElementRef) { 
    this.setBorder(this.GREY_COLOR);
    this.setHeight(180);
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.RED_COLOR)
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.GREY_COLOR)
  }
  private setBorder(color: string){
    const border = 'solid 4px ' + color;
    this.element.nativeElement.style.border= border;
  }
  private setHeight(height: number){
    this.element.nativeElement.style.height=height+'px';
  }
}
