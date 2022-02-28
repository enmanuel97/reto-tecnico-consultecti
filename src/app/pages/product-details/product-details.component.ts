import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducts } from '../../interfaces/products.interface';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    public loading: boolean = true;
    public product!: IProducts;

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
        console.log('ProductDetailsComponent');
        this.activatedRoute.params.subscribe(params => {
            this.apiService.getProductById(params['id']).subscribe(product => {
                console.log(product);
                this.loading = false;
                this.product = product;
            });
        });
    }

    ngOnInit(): void {
    }
}