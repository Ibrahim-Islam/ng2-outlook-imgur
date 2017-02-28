import { LoaderService } from './shared/loader.service';
import { AuthService } from './shared/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'albums', loadChildren: './+albums/albums.module#AlbumsModule' },
    { path: '', redirectTo:'/login',  pathMatch: 'prefix' }
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        CommonModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        LoaderComponent,
        LoginComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        AuthService,
        LoaderService
    ]
})
export class AppModule {
    constructor(){
        console.log("App module initialized");
    }
}