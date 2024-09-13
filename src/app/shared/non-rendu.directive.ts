import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]',
  standalone: true
})
export class NonRenduDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontStyle = 'italic';
    el.nativeElement.style.backgroundColor = 'pink';
  }
}
