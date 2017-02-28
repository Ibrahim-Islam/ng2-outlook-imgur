import { Component } from '@angular/core';
import { LoaderService } from './shared/loader.service';

@Component({
    selector: 'app-root',
    template: `
        <router-outlet></router-outlet> 
        <loader *ngIf="loaderService.visible"></loader>
    `
})
export class AppComponent { 
    constructor(private loaderService: LoaderService){
        console.log("App component initialized");
    }
}