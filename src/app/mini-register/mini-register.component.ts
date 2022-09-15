import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-mini-register',
  templateUrl: './mini-register.component.html',
  styleUrls: ['./mini-register.component.css']
})
export class MiniRegisterComponent implements OnInit {

  username = ''
  password = ''
  email = ''
  errorMessage = ''
  invalidRegister = false

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleMReg(){
    if(this.username != null && this.password != null && this.email != null){
      // redirect to Register page
      this.router.navigate(['register', this.username])
      this.invalidRegister = false
    }else{
      this.invalidRegister = true
    }
  }

}
