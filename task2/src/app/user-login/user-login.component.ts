import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent  implements OnInit{

  constructor(private router:Router){}

  logIN:FormGroup|any

  ngOnInit(): void{
    this.logIN = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  

  onLogIn() {
    if (this.logIN.valid) {
      const userName = this.logIN.get('userName').value;
      const password = this.logIN.get('password').value;
      sessionStorage.setItem('username', userName);
      sessionStorage.setItem('password', password);

      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (userName === storedUsername && password === storedPassword) {
        alert('Login successful');
        this.router.navigate(['welcome'])
      } else {
        alert('Invalid credentials');
      }
      this.logIN.reset();
    } else {
      alert("UhH OHH! Looks Something is Missing");
    }
  }

  // get userName(){
  //   return this.logIN.userName;
  // }

  // get password(){
  //   return this.logIN.password;
  // }

}
