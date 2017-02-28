import { Component, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthService } from '../shared/auth.service';
import { LoaderService } from '../shared/loader.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'albums',
    template: `
    <div class="container" style="margin-top: 10px; margin-bottom: 10px;">
        <div class="row">
            <div *ngFor="let album of albums" class="album-row col-lg-4 col-sm-6 col-xs-12">
                <a href="#">
                    <img src="{{album.link}}" class="thumbnail img-responsive">
                </a>
            </div>
        </div>
    </div>        
    `
})
export class AlbumsComponent {
    public albums: any[] = [];

    constructor(private http: Http,
        private authService: AuthService,
        private loaderService: LoaderService,
        private cd: ChangeDetectorRef,
        private appref: ApplicationRef){
        console.log("Albums component initialized");
    }

    ngDoCheck(){
        console.log("=================Do Check===================");
    }

    ngOnInit(){
        let options = new RequestOptions({
            headers: new Headers({
                'Authorization': 'Bearer ' + this.authService.auth.access_token,
            })
        });
        this.http
            .get('https://api.imgur.com/3/account/'+ this.authService.auth.account_username +'/albums', options)
            .map(v => v.json())
            .flatMap(albumRaw => Observable.from(albumRaw.data))
            .flatMap((album: any) => this.http.get('https://api.imgur.com/3/album/'+ album.id +'/image/' + album.cover, options))
            .map(response => response.json().data)
            .subscribe(album => {
                console.log(album); //if this is visible in console then should be visible in UI also
                this.loaderService.visible = false;
                this.albums.push(album); //should show up on the UI as soon as `albums` have data                
                //this.cd.detectChanges(); //enabling this will cause component changes to be reflected excluding service
                //this.appref.tick(); //enabling with will reflect all changes including components and services
            });
    }
}