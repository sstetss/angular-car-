import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { delay, of, throwError } from 'rxjs';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })
  // login: Login[] =[]
  // isAuthenticated: boolean = true
  // emailInput: string = ''
  // passwordInput: string = ''



  constructor(private authService: AuthService,
      private router: Router
    ){}

    // ngOnInit(){
    //   this.authService.getLogin().subscribe({
    //     next: (data: Login[]) => {
    //       this.login = data
    //       console.log(this.login[0].email);
          
    //     },
    //     error: (err)=> {console.log('fuck');
    //     }
    //   }) 
    // }

  submit(){
    // if(this.login[0].email == this.emailInput && this.login[0].password == this.passwordInput){
    //   this.isAuthenticated = true
    //   console.log('yes');
      
    //   return of({}).pipe(delay(1000))
      
    // }
    // return throwError(() => new Error('Invalid login or password'))
    
    let email = this.loginForm.value.email
    let password = this.loginForm.value.password
    this.authService.login(email,password).subscribe({
      next: ()=>{
        this.router.navigate(['/admin/posts'])
      },
      error: (err)=>{
        alert('Wrong Data')
      }
    })
  }
}
