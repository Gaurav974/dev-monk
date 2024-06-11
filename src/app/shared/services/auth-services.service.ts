import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';
import { DialogBoxService } from './dialog-box.service';
import { DialogLogoutComponentComponent } from '../components/dialog-logout-component/dialog-logout-component.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  constructor(private _router : Router ,private _snackBar: SnackBarService ,private _DialogBoxService :DialogBoxService){
  }
  loginStatus : boolean = false

  isAuthenticated(){
      let  iss = new Promise((res,rej) =>{
          setTimeout(()=>{
              if(localStorage.getItem("token")){
                 this.loginStatus=true
              }else{
                this.loginStatus=false
              }
              res(this.loginStatus)
              rej('is not found')
          },200)
      })
      return iss
  }
  login(Useremail: string,UserPass: string){
      if(Useremail === "devuser@gmail.com" && UserPass === 'devuser@123' ){
          this.loginStatus=true
          localStorage.setItem("token","JWT Token")
          localStorage.setItem("userrole","user")
         this._snackBar.openSnackBar(`Login Successfully Completed`);
        }else if(Useremail === "devadmin@gmail.com" && UserPass === 'devadmin@123' ){
            this.loginStatus=true
            localStorage.setItem("token","JWT Token")
            localStorage.setItem("userrole","admin")
             this._snackBar.openSnackBar(`Login Successfully Completed`);    
        }else{
         this._snackBar.openSnackBar(`'in valid Useremail or password'`);
          alert('in valid Useremail or password')
          this._router.navigate(['/'])
        }
       }
       logOutToApp(){
        const dialogRef = this._DialogBoxService.openDialog(
         DialogLogoutComponentComponent
        );
        dialogRef.afterClosed().subscribe((res: boolean) => {
          if (res) {
            this._snackBar.openSnackBar(`Logout Successfully Completed`);
            this._router.navigate([''])
            localStorage.removeItem('Token');
            localStorage.removeItem('userRole');
            this.loginStatus = false;
            return;
          } else {
            return;
          }
        });
          
     }
}
