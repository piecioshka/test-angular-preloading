import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomPreloadingService implements PreloadingStrategy {
  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log("route", route);
    if (route.data && route.data.preload) {
      return load();
    }
    return of(null);
  }
}
