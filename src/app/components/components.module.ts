import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NoImagePipe } from '../pipes/no-image.pipe';

@NgModule({
    declarations: [
      	ProductsComponent,
      	ProductComponent,
        NoImagePipe
    ],
    imports: [
        CommonModule
    ],
	exports: [
		ProductsComponent,
		ProductComponent
    ],
})
export class ComponentsModule { }