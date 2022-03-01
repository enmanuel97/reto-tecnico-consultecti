import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	HomeComponent,
      	ProductDetailsComponent,
  	],
  	imports: [
  	  	BrowserModule,
  	  	AppRoutingModule,
		HttpClientModule,
		FormsModule,
		NgxPaginationModule,
		ComponentsModule,
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }
