import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartItem } from '../models/cart-item';
import { PlanDetails } from '../models/plandetails';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  baseUrl = ('api/plan');
  url = ('api/shoppingcart');

  getAll(): Observable<PlanDetails[]> {
    return this.http.get<PlanDetails[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError<PlanDetails[]>('getAll', []))
    );
      
  }

  /** GET plan by id. Will 404 if id not found */
  getPlan(id: number): Observable<PlanDetails> {
    return this.http.get<PlanDetails>(this.baseUrl).pipe(
      catchError(this.handleError<PlanDetails>(`getPlan id=${id}`))
    );
}

//post added items
addToCart(payload){
  return this.http.post(`${this.url}`, payload);
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead

      return of(result as T);
  };
}

}
