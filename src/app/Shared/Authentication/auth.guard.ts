//import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  
  constructor(private AuthService: AuthService, private router: Router) {}  

  canActivate():boolean{
    if (!this.AuthService.gettoken()) {  
      this.router.navigateByUrl("/login");  
      }  
      return this.AuthService.gettoken()!= "undefined" ;
  }
  
}
