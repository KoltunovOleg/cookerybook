import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IRecipe } from '../interfaces/interfaces';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class BackendApiService {
	apiURL: string = 'http://localhost:4000';

	constructor(private http: HttpClient) { }

	public getRecipes(): Observable<IRecipe[]> {
		return this.http.get<IRecipe[]>(this.apiURL + '/recipes')
			.pipe(
				retry(1),
				catchError(this.handleError)
			)
	}

	// Error handling 
	handleError(error) {
		let errorMessage = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		window.alert(errorMessage);
		return throwError(errorMessage);
	}
}
