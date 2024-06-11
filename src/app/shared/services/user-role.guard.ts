import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route.data);
    let StaticUserRole : Array<string>=route.data['userrole']
    let ActuvalUserRole : string =localStorage.getItem('userrole')!
    return  StaticUserRole.includes(ActuvalUserRole)  
  }
  
}
