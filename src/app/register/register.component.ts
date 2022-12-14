import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

}
