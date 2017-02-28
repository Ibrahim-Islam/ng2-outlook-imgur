import * as https from 'https';
import { Component } from '@angular/core';
import { LoaderComponent } from '../shared/loader.component';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/loader.service';

declare var Office: any;

@Component({
    selector: 'login',
    template: `
    <div *ngIf="!loaderService.visible" class="main">
        <button (click)="login($event)" class="button button2 center">login with imgur</button>
    </div>
    `
})
export class LoginComponent {

    logging: boolean = false;

    constructor(private authService: AuthService,
                private router: Router,
                private loaderService: LoaderService)
    {
        console.log("Login component initialized");
    }

    login(event){
        this.loaderService.visible = true;
        var authurl = 'https://api.imgur.com/oauth2/authorize?client_id=7ecc191278e108f&response_type=token';
        Office.context.ui.displayDialogAsync(authurl, { height: 65, width: 50, requireHTTPS: true }, (asyncResult) => 
        {
            var dialog = asyncResult.value;
            dialog.addEventHandler(Office.EventType.DialogMessageReceived, (event) => {
                this.authService.auth = JSON.parse(event.message);
                dialog.close();
                this.router.navigate(['/albums']);
            });
        });        
    }
}