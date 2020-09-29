import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./core/core.module").then(module => module.CoreModule),
	},
	{
		path: "about",
		component: AboutComponent,
	},
	{
		path: "contact",
		component: ContactComponent,
	},
	{
		path: "change-log",
		component: ChangeLogComponent,
	},
	{
		path: "**",
		redirectTo: "",
	}
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
