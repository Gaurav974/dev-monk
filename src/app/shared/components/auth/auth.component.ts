import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../services/auth-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public hide = true;
  public SingInForm !: FormGroup;

  constructor(private _AuthService :AuthServicesService) {}
  ngOnInit(): void {
    this.creatUserlogin()
  }

  OnloginHandler(Useremail : string ,passwordata :string){
    this._AuthService.login(Useremail,passwordata)
  }
  OnclickHandler() {
  }
  creatUserlogin(){
    return this.SingInForm = new FormGroup({
      UserEmail : new FormControl(null,[Validators.required,Validators.email]),
      UserPass : new FormControl(null,[Validators.required]),
    })
  }

  
 
}
