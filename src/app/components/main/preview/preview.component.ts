import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
	selector: 'app-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

	constructor(
		private BackendApi: BackendApiService
	) { }

	ngOnInit() {
		this.BackendApi.getRecipes().subscribe((res) => {
			console.log(res);
		})
	}

}
