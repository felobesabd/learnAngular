import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iproduct } from 'src/Models/iproduct';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOptions;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //Authorization: 'my-auth-token'
      })
    };
  }

  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${Environment.APIURL}/Products`);
  }

  getProductByCatID(catID: number) {
    return this.httpClient.get<Iproduct[]>(`${Environment.APIURL}/Products?cateID=${catID}`);
  }

  getProductByID(id: number) {
    return this.httpClient.get<Iproduct[]>(`${Environment.APIURL}/Products/${id}`);
  }

  createProduct(newProd: Iproduct): Observable<Iproduct> {
    // return this.httpClient.post<Iproduct>(`${Environment.APIURL}/Products`, JSON.stringify(newProd), this.httpOptions);
    return this.httpClient
    .post<Iproduct>(`${Environment.APIURL}/Products`, JSON.stringify(newProd), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updateProduct(id: number, newProdUp: Iproduct) {}

  deleteProduct(id: number) {}
}
