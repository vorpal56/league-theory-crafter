import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	// {
	// 	path: "",
	// 	redirectTo: "/home",
	// 	pathMatch: "full"
	// },
	{
		path: "",
		loadChildren: () => import("./core/core.module").then(module => module.CoreModule),
		data: {
			state: ""
		}
	},
	{
		path: "about",
		component: AboutComponent,
		data: {
			state: "about"
		}
	},
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	providers: [

	]
})
export class AppRoutingModule { }
