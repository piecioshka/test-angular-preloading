import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListPageComponent } from './pages/photo-list-page/photo-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: PhotoListPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhotosRoutingModule { }
