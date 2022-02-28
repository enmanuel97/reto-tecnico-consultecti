import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICategories } from '../../interfaces/categories.interface';

@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public categories: ICategories[] = [];
	public isLoading: boolean = true;

  	constructor(private apiService: ApiService) { }
	
  	ngOnInit(): void {
  	}
	
	private getCategories() {
		this.apiService.getCategories().subscribe((response) => {
			this.categories = response;
		}, (error: any) => {
			console.log(error);
		});
	}
}
