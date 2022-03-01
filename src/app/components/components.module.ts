import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { NoImagePipe } from '../pipes/no-image.pipe';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
      	ProductComponent,
        NoImagePipe,
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
	exports: [
		ProductComponent,
        LoadingComponent
    ],
})
export class ComponentsModule { }