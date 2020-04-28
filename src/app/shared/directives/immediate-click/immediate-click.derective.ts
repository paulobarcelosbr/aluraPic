import { Directive, OnInit, ElementRef } from '@angular/core';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmeadiateClickDirective implements OnInit{
    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlataformDetectorService
    ){};
    ngOnInit(): void {
        this.platFormDetector.isPlataformBrowser && this.element.nativeElement.click();
    }

}