import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './shared/components/auth/auth.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogLogoutComponentComponent } from './shared/components/dialog-logout-component/dialog-logout-component.component';
import { NavBarToggleDirective } from './shared/directive/nav-bar-toggle.directive';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminModule } from './shared/admin/admin.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    DialogLogoutComponentComponent,
    NavBarToggleDirective,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
