import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';
import { LoginComponent } from './users/login/login.component';


const routes: Routes = [
	{
		path: "",
		redirectTo: "users/registration",
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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
