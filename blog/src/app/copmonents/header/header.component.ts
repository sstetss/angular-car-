import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   style ={
    opacity: 1
  }

  constructor(private authService : AuthService){}
  ngOnInit(){
    if(!this.authService.isActive){
       this.style ={
        opacity: 0
    }
  }else {
    this.style ={
      opacity: 0
  }
  }
}

  goOut(){
    this.authService.logout()
  }
}
