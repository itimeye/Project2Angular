import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = ''
  invalidLogin = false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){

    if(this.username==='' && this.password===''){
      this.router.navigate([]) //landing page for login
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }

  }

}
