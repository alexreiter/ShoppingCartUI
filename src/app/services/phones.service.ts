import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Phone } from '../models/phone';
import { map, tap, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  constructor( private http: HttpClient) { }

  phoneUrl = ('api/phones');


  //Get all phones 
  
   getAll(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.phoneUrl)
    .pipe(
      catchError(this.handleError<Phone[]>('getAll', []))
    );
      
  }

/** GET hero by id. Will 404 if id not found */
getPhone(id: number): Observable<Phone> {
  const url = `${this.phoneUrl}/${id}`;
  return this.http.get<Phone>(url).pipe(
    catchError(this.handleError<Phone>(`getPhone id=${id}`))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 
}


