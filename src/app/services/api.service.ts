import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategories } from '../interfaces/categories.interface';
import { IProducts } from '../interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class ApiService {
  	constructor(private httpClient: HttpClient) { }

	public getCategories() {
		return this.httpClient.get<ICategories[]>(`${environment.apiUrl}/categories`);
	}

	public getProducts() {
		return this.httpClient.get<IProducts[]>(`${environment.apiUrl}/products`);
	}

	public getProductById(id: number) {
		return this.httpClient.get<IProducts>(`${environment.apiUrl}/product/${id}`);
	}

	public getProductsByCategory(categoryId: number) {
		return this.httpClient.get<IProducts[]>(`${environment.apiUrl}/products?category_id=${categoryId}`);
	}
}
