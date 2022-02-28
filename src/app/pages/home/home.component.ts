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
	public isLoading: boolean = true;

  	constructor(private apiService: ApiService) { }
	
  	ngOnInit(): void {
		this.getData();
  	}
	
	private getData() {
		forkJoin([
			this.apiService.getCategories(),
			this.apiService.getProducts()
		]).subscribe(response => {
			this.categories = response[0];
			this.products 	= response[1];
			this.isLoading 	= false;
		});
	}
}
