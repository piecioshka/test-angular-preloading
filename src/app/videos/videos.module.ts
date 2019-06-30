import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoListPageComponent } from './pages/video-list-page/video-list-page.component';

@NgModule({
    declarations: [
        VideoListPageComponent
    ],
    exports: [
        VideoListPageComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class VideosModule { }
