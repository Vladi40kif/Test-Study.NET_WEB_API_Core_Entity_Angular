import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full"
	},

	{
		path:'users',
		component: UsersComponent,
		children: [
			{
				path: 'registration',
				component: RegistrutionComponent
			},
			{
				path: 'login',
				component: LoginComponent
			}
		]
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'profile',
		component: ProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
