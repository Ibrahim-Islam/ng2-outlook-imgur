import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'loader',
    template: `
    <div class="loader-wrapper" #wrapper>
        <div class="loader">Loading...</div>
    </div>    
    `
})
export class LoaderComponent {
    @ViewChild('wrapper') wrapper: ElementRef; 

    constructor(){
        console.log("Loader component initialized");
    }
}