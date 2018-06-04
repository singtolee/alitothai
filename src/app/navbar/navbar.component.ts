import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  error:any;
  //why have to add these two var
  email:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){}

}
