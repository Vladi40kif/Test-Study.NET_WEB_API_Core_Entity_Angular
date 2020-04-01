import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrutionComponent } from './users/registrution/registrution.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { AwardsComponent } from './awards/awards.component';
import { ArticleComponent } from './article/article.component'
import { from } from 'rxjs';
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
	},
	{
		path:'about',
		component: AboutComponent
	},
	{
		path:'awards',
		component: AwardsComponent
	},
	{
		path:'projects',
		component: ProjectsComponent
	},
	{
		path:'publications',
		component: PublicationsComponent
	},
	{
		path:'article',
		component: ArticleComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
