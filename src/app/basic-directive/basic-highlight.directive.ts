import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef) {}
  ngOnInit(): void {
    this.eleRef.nativeElement.style.backgroundColor = 'blue';
  }
}
