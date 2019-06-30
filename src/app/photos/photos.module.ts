import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoListPageComponent } from './pages/photo-list-page/photo-list-page.component';

@NgModule({
    declarations: [
        PhotoListPageComponent
    ],
    imports: [
        CommonModule,
        PhotosRoutingModule
    ]
})
export class PhotosModule { }
