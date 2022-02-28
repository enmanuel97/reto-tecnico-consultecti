import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'product/:id',
		component: ProductDetailsComponent
	},
	{ path: '**', pathMatch: 'full', component: NopagefoundComponent },
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
