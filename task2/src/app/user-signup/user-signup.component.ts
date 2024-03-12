import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {

  signUp: any = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  })


  onSignUp() {
    console.log("Form validity:", this.signUp.value);

    if (this.signUp.valid) {
      const userName = this.signUp.get('userName').value;
      const email = this.signUp.get('email').value;
      const name = this.signUp.get('name').value;
      const city = this.signUp.get('city').value;
      const country = this.signUp.get('country').value;
      const password = this.signUp.get('password').value;

      localStorage.setItem('username', userName);
      localStorage.setItem('name', name);
      localStorage.setItem('city', city);
      localStorage.setItem('email', email);
      localStorage.setItem('country', country);
      localStorage.setItem('password', password);

      alert("Values stored successfully.");

      this.signUp.reset();
    } else {
      console.log("Form is invalid.");
      alert("Enter all credentials");
      this.signUp.reset();
    }
  }

  get userName() {
    return this.signUp.get('userName')
  }

  get name() {
    return this.signUp.get('name')
  }

  get email() {
    return this.signUp.get('email')
  }

  get password() {
    return this.signUp.get('password')
  }

  get city() {
    return this.signUp.get('city')
  }

  get country() {
    return this.signUp.get('country')
  }

  get zip() {
    return this.signUp.get('zip')
  }

}


// signupUser: any[] = [];
//   signupObj: any = {
//     userName: "",
//     Uname: "",
//     email: "",
//     password: "",
//     country: "",
//     city: "",
//     zip: ""
//   };


//   signUp: any = new FormGroup({
//     userName: new FormControl(''),
//     Uname: new FormControl(''),
//     email: new FormControl(''),
//     password: new FormControl(''),
//     country: new FormControl(''),
//     city: new FormControl(''),
//     zip: new FormControl(''),
//   })

//   onSignUp() {
//     this.signupObj.userName = this.signUp.get('userName').value;
//     this.signupObj.Uname = this.signUp.get('Uname').value;
//     this.signupObj.email = this.signUp.get('email').value;
//     this.signupObj.password = this.signUp.get('password').value;
//     this.signupObj.country = this.signUp.get('country').value;
//     this.signupObj.city = this.signUp.get('city').value;
//     this.signupObj.zip = this.signUp.get('zip').value;
//     this.signupUser.push(this.signupObj)
//     localStorage.setItem('signupUser', JSON.stringify(this.signupUser))
//     this.signUp.reset();
//   }