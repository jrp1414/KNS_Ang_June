import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @Input() DefaultColor:string;
  // @Input() HighlightColor:string;
  // @Input('dc') DefaultColor: string;
  @Input('appBetterHighlight') DefaultColor: string;
  @Input('hc') HighlightColor: string;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor='yellow';
    this.el.nativeElement.style.backgroundColor = this.DefaultColor;
  }

  @HostListener("mouseenter") onmouseenter() {
    // this.el.nativeElement.style.backgroundColor='pink';
    this.el.nativeElement.style.backgroundColor = this.HighlightColor;
    this.el.nativeElement.style.borderColor = "black";
    this.el.nativeElement.style.borderStyle = "dotted";
  }

  @HostListener("mouseleave") onmouseleave() {
    // this.el.nativeElement.style.backgroundColor='yellow';
    this.el.nativeElement.style.backgroundColor = this.DefaultColor;
  }

  @HostListener("click") onclick() {
    alert("Hey, You clicked me..");
  }
}
