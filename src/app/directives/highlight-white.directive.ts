import {Directive} from '@angular/core';
import {ElementRef} from "@angular/core";
import {HostListener} from "@angular/core";

@Directive({
  selector: '[appHighlightWhite]'
})
export class HighlightWhiteDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.magic('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.magic('');
  }

  private magic(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
