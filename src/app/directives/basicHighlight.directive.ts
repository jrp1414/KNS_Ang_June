import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    // selector: "[appHighlight]"
    selector: ".appHighlight"
})
export class BasicHighlightDirective  implements OnInit{
    constructor(private el:ElementRef) {
        
    }
    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor="yellow";
    }
    // elmentRef:ElementRef;
    // constructor(el:ElementRef) {
    //     this.elmentRef = el;
    // }

}