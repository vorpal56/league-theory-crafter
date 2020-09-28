import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
	{
		path: "",
		component: HomepageComponent,
	}
];

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	providers: [

	]
})
export class CoreRoutingModule { }
