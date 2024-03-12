import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  name:any = localStorage.getItem("name");
  username:any = localStorage.getItem("username");
  email:any = localStorage.getItem("email");
  city:any = localStorage.getItem("city");
  country:any = localStorage.getItem("country");
  
  constructor(private router: Router) {}

  onLogout(): void {
    console.log('Logout button clicked');
    this.router.navigate(['logIn']); 
  }

}
