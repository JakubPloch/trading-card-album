import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get = (url: string, params?: any): Observable<any> => this.httpClient.get(environment.webApiUrl + url, { params })
    .pipe(
      catchError(this._handleError)
    );
    
  private _handleError = (error: any) => {
    console.log(error);
    return error;
  }
}
