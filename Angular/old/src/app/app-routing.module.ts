import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';


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
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
