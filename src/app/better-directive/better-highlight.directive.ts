import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer2: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer2.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer2.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer2.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
