import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/products.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product!: IProducts;

    constructor() { }
  
    ngOnInit(): void {
    }

}
