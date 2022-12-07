import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { VideoListPageComponent } from "../videos/pages/video-list-page/video-list-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { CustomPreloadingService } from "./services/custom-preloading.service";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "videos",
    children: [
      {
        path: "",
        component: VideoListPageComponent,
      },
    ],
  },
  {
    path: "users",
    loadChildren: () =>
      import("../users/users.module").then((m) => m.UsersModule),
    data: { preload: true },
  },
  {
    path: "photos",
    loadChildren: () =>
      import("../photos/photos.module").then((m) => m.PhotosModule),
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: CustomPreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
