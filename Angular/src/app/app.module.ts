import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from './shared/user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';
import { LoginComponent } from './users/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrutionComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true
    }), 
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
