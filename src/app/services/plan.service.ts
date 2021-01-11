import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CartItem } from '../models/cartitem';
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

//Add item to the cart
addToCart(payload) : Observable<CartItem>{
  return this.http.post<CartItem>(`${this.url}`, payload);
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
      return of(result as T);
  };
}

}
