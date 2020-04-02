import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './shared/user/auth.interceptor';

import { AuthService } from './shared/Auth/auth.service';
import { EditProfileService } from './shared/editProfile/edit-profile.service';
import { ProfileService } from './shared/profile/profile.service';
import { UserService } from './shared/User/user.service';
import { ArticlesService } from './shared/Aricles/articles.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { UserpartComponent } from './navbar/userpart/userpart.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowComponent } from './profile/show/show.component';
import { EditComponent } from './profile/edit/edit.component';

import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { AwardsComponent } from './awards/awards.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrutionComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    UserpartComponent,
    ProfileComponent,
    ShowComponent,
    EditComponent,
    AboutComponent,
    PublicationsComponent,
    ProjectsComponent,
    AwardsComponent,
    CarouselComponent,
    ArticleComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    EditProfileService,
    ProfileService,
    UserService,
    ArticlesService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
    ],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
