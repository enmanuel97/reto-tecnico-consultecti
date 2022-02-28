import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	HomeComponent,
      	ProductDetailsComponent
  	],
  	imports: [
  	  	BrowserModule,
  	  	AppRoutingModule,
		HttpClientModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
