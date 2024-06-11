import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../services/auth-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService :AuthServicesService , private _routes :Router) { }
  
  ngOnInit(): void {
  }
  OnlogIn(){
    this._routes.navigate([''])
  }
 
  OnLogOut() {
    this._AuthService.logOutToApp()

  }
}
