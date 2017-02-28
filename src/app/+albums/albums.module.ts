import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from '../+albums/albums.component';

const routes: Routes = [
    { path: '', component: AlbumsComponent }
];

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AlbumsComponent
    ]
})
export class AlbumsModule {

}