

import { style } from "@angular/animations"
import { verifyHostBindings } from "@angular/compiler"
import {Directive, ElementRef,Renderer2 ,HostListener,Input,HostBinding } from "@angular/core"


@Directive({
   selector: "[appStyle]" 
})
export class StyleDirective   {
    @Input("appStyle") color: string = "blue"
    @Input("appStyle") fontWeight = "normal" 
    
    constructor(private el: ElementRef, private r: Renderer2) { }
    
    @HostListener('click', ["$event.target"])
    onClick(event: Event) { }
    @HostBinding("style.color") elColor: string | null = null;

    @HostListener('mouseenter') onEnter() {
          this.elColor = this.color
        // this.r.setStyle(this.el.nativeElement, 'color', this.color)
        // this.r.setStyle(this.el.nativeElement, 'fontWeight' , this.fontWeight )
    }
    @HostListener('mouseleave') onLeave() {
         this.elColor = null
        // this.r.setStyle(this.el.nativeElement, 'color', null)
        // this.r.setStyle(this.el.nativeElement, 'fontWeight' , null )
    }
    
}