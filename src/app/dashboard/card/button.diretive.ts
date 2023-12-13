import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[buttonCostume]"
})
export class ButtonDirective implements OnInit{
    @Input() likes;
    constructor(private element: ElementRef){}
    @HostListener('click')

    applyRule(){
        if (this.likes > 9) {
            this.element.nativeElement.style.backgroundColor = "green";
            this.element.nativeElement.style.color = "white";
        } else if (this.likes >= 4) {
            this.element.nativeElement.style.backgroundColor = "blue";
            this.element.nativeElement.style.color = "white";
        }
    }

    ngOnInit(): void {
        this.applyRule();
    }
}