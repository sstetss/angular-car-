import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private authService: AuthService,
    private router: Router){}

  canActivate(){
    if(!this.authService.isAuthenticated){
      this.router.navigate(['/login']);
    }
    return true
  }

  canActivateChild(){
    return this.canActivate()
  }
  
}
