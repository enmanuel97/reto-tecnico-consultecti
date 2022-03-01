import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICategories } from '../../interfaces/categories.interface';
import { IProducts } from '../../interfaces/products.interface';
import { forkJoin } from 'rxjs';

@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public categories: ICategories[] = [];
	public products: IProducts[] = [];
	public productsInCategory: IProducts[] = [];
	public isLoading: boolean = true;
	public filtered: boolean = false;
	public search: string = '';
	public currentPage: number = 1;

  	constructor(private apiService: ApiService) { }
	
  	ngOnInit(): void {
		this.getData();
  	}
	
	public productInCategory(category_id: number) {
		return this.productsInCategory.filter(product => product.category_id === category_id).length;
	}
	
	public filterProductByCategory(category_id: number) {
		this.filtered = true;
		this.isLoading = true;
		this.apiService.getProductsByCategory(category_id).subscribe(response => {
			this.products = response;
			this.isLoading = false;
		});
	}

	public cleanFilter() {
		this.filtered = false;
		this.search = '';
		this.products = this.productsInCategory;
	}

	public searchProduct() {
		this.products = this.productsInCategory.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase()));
	}

	public changePage(page: number) {
		this.currentPage = page;
    }

	private getData() {
		forkJoin([
			this.apiService.getCategories(),
			this.apiService.getProducts()
		]).subscribe(response => {
			this.categories 		= response[0];
			this.products 			= response[1];
			this.productsInCategory	= response[1];
			this.isLoading 			= false;
		});
	}
}
