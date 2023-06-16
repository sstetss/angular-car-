import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string = "user1@gmail.com"
  password: string = "qwerty"
  isAuthenticated: boolean = true
  isActive:boolean = false

  constructor(private router: Router) { }

  login(email: string, password: string){
    if(email == this.email && password == this.password){
      this.isAuthenticated = true
      this.isActive = true
      return of({}).pipe(delay(1000))
      
    }
    return throwError(() => new Error('Invalid login or password'))
  }

  register(){}

  logout(){
    this.isAuthenticated = false
    this.router.navigate(['/login'])

  }
}

// // getLogin() : Observable<Login[]>{
  //   return this.http.get(this.uri) as Observable<Login[]>
    
  // }