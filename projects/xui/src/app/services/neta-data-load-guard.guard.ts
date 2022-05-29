import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: "root"
})
export class NetaDateLoadGuard implements CanActivate {
  
  constructor(
    private entityTypeService : UserService,
    private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // At this point, only routes with a single path element are considered valid routes.
    if (route.url.length != 1) {
      this.router.navigate(['not-found']);
      return false;
    }

    let path = route.url[0].toString();
    // Ask backend, what kind of entity the requested path matches to
    this.entityTypeService.GetDataByUserName(path).then(response => {

      let entityTypeModel = response as any;

      // // If backend did not recognize path --> redirect to page not found component.
      // if (entityTypeModel.entityType === EntityType.Unknown) {
      //   this.router.navigate(['not-found']);
      // }

      // Build a new routes array. Slicing is required as wildcard route
      // should be omitted from the new routes array (risk of endless loop)
      let routes = this.router.config;
      let newRoutes = routes.slice(0, routes.length - 1);

      // Add a new route for the requested path to the correct component.
      switch(entityTypeModel.entityType) {
        // case EntityType.Student:
        //   newRoutes.push({ path: path, component: StudentDetailComponent, data: { resourceName: path } });
        //   break;
        // case EntityType.Course:
        //   newRoutes.push({ path: path, component: CourseDetailComponent, data: { resourceName: path } });
        //   break;
        default:
          this.router.navigate(['not-found']);
          return;
      }

      // Reload routes and navigate.
      this.router.resetConfig(newRoutes);
      this.router.navigate([path]);
    },
    err => {
      this.router.navigate(['not-found']);
    });

    // Guard always returns true and loads LoadingComponent while API 
    // request is being executed.
    return true;
  }

  
}
