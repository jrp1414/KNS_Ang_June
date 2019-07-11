import { Directive, ElementRef, OnInit, HostListener, Input, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // @Input() DefaultColor:string;
  // @Input() HighlightColor:string;
  // @Input('dc') DefaultColor: string;
  @Input('appBetterHighlight') DefaultColor: string;
  @Input('hc') HighlightColor: string;
  @HostBinding("style.backgroundColor") bgColor:string;

  constructor(private el: ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    // this.el.nativeElement.style.backgroundColor='yellow';
    // this.el.nativeElement.style.backgroundColor = this.DefaultColor;
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.DefaultColor);
    this.bgColor = this.DefaultColor;
  }

  @HostListener("mouseenter") onmouseenter() {
    // this.el.nativeElement.style.backgroundColor='pink';
    // this.el.nativeElement.style.backgroundColor = this.HighlightColor;
    // this.el.nativeElement.style.borderColor = "black";
    // this.el.nativeElement.style.borderStyle = "dotted";
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.HighlightColor);
    this.bgColor = this.HighlightColor;
    
  }

  @HostListener("mouseleave") onmouseleave() {
    // this.el.nativeElement.style.backgroundColor='yellow';
    // this.el.nativeElement.style.backgroundColor = this.DefaultColor;
    // this.renderer.setStyle(this.el.nativeElement,"background-color",this.DefaultColor);
    this.bgColor = this.DefaultColor;
  }

  @HostListener("click") onclick() {
    alert("Hey, You clicked me..");
  }
}
