import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from '../../interfaces/products.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    @Input() products: IProducts[] = [];
    constructor() { }

    ngOnInit(): void {
    }

}
