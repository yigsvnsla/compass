import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable, inject } from '@angular/core';
import { ApiResponse, HttpControllerArg, HttpControllerArgFetch, HttpControllerArgSender } from "../interfaces/http-controller.interface";
import { DATA_SOURCE } from '../enums/data-source.enum'
import { API_ENV } from "../env/enviroment";

@Injectable({
  providedIn: 'root'
})
export class HttpController {

  private readonly _HttpClient: HttpClient = inject(HttpClient)

  /**
   * The function handles different types of errors that can occur during an HTTP request and returns the
   * error as an observable.
   * @param {HttpErrorResponse} httpErrorResponse - The parameter `httpErrorResponse` is an object of
   * type `HttpErrorResponse` which represents an HTTP response error. It contains information about the
   * error that occurred during an HTTP request, such as the error status code, error message, and the
   * response body.
   * @returns an Observable that emits the HttpErrorResponse object.
  */
  private errorHandler(httpErrorResponse: HttpErrorResponse) {
    //? A client-side or network error occurred. Handle it accordingly.
    if (httpErrorResponse.error instanceof ArrayBuffer) console.error('An error [ArrayBuffer] occurred:', httpErrorResponse.error);
    //? A client-side or network error occurred. Handle it accordingly.
    if (httpErrorResponse.error instanceof ErrorEvent) console.error('An error [ErrorEvent] occurred:', httpErrorResponse.error.message);
    //? The backend returned an unsuccessful response code.
    //? The response body may contain clues as to what went wrong,
    // console.error(`Backend returned [ErrorEvent] code ${httpErrorResponse.status},body was: ${JSON.stringify(httpErrorResponse.error)}`);
    return throwError(() => httpErrorResponse);
  }

  /**
   * The `read` function sends an HTTP GET request to a specified apiPath and returns an Observable of
   * the response, wrapped in an ApiResponse object.
   * @param httpControllerArgs - An object that contains the arguments for making an HTTP request. It has
   * the following properties:
   * @returns an Observable of type ApiResponse<K>.
  */
  public read<K>(httpControllerArgs: HttpControllerArgFetch<K>): Observable<ApiResponse<K>> {
    return this._HttpClient
      .get<ApiResponse<K>>(`${this.apiPath(httpControllerArgs.datasource)}/${httpControllerArgs.path}`,
        {
          headers: this.headers,
          params: new HttpParams({ fromObject: { ...httpControllerArgs.pagination, ...httpControllerArgs.queryParams } }),
        }
      )
      .pipe(catchError(this.errorHandler))
  }

  /**
   * The `create` function sends a POST request to a specified apiPath with the provided body and query
   * parameters, and returns an Observable of the API response.
   * @param httpControllerArgs - The `httpControllerArgs` parameter is an object that contains the
   * following properties:
   * @returns an Observable of type ApiResponse<K>.
  */
  public create<K>(httpControllerArgs: HttpControllerArg<K>): Observable<ApiResponse<K>> {
    return this._HttpClient
      .post<ApiResponse<K>>(`${this.apiPath(httpControllerArgs.datasource)}/${httpControllerArgs.path}`, httpControllerArgs.body,
        {
          headers: this.headers,
          params: new HttpParams({ fromObject: { ...httpControllerArgs.pagination, ...httpControllerArgs.queryParams } }),
        }
      )
      .pipe(
        catchError(this.errorHandler),
      );
  }

  /**
   * The function `update` sends a PUT request to a specified apiPath with the provided arguments and
   * returns an Observable of the API response.
   * @param httpControllerArgs - The `httpControllerArgs` parameter is an object that contains the
   * following properties:
   * @returns an Observable of type ApiResponse<K>.
  */
  public update<K>(httpControllerArgs: HttpControllerArg<K>): Observable<ApiResponse<K>> {
    return this._HttpClient
      .put<ApiResponse<K>>(`${this.apiPath(httpControllerArgs.datasource)}/${httpControllerArgs.path}`, httpControllerArgs.body,
        {
          headers: this.headers,
          params: new HttpParams({ fromObject: { ...httpControllerArgs.pagination, ...httpControllerArgs.queryParams } }),
        }
      )
      .pipe(
        catchError(this.errorHandler),
      );
  }

  /**
   * The `delete` function sends a DELETE request to a specified apiPath with optional query parameters
   * and a request body, and returns an Observable that emits an ApiResponse.
   * @param httpControllerArgs - The `httpControllerArgs` parameter is an object that contains the
   * following properties:
   * @returns an Observable of type ApiResponse<K>.
  */
  public delete<K>(httpControllerArgs: HttpControllerArg<K>): Observable<ApiResponse<K>> {
    return this._HttpClient
      .delete<ApiResponse<K>>(`${this.apiPath(httpControllerArgs.datasource)}/${httpControllerArgs.path}`,
        {
          headers: this.headers,
          params: new HttpParams({ fromObject: { ...httpControllerArgs.pagination, ...httpControllerArgs.queryParams } }),
          body: httpControllerArgs.body
        }
      )
      .pipe(catchError(this.errorHandler))
  }

  /**
   * The function returns the apiPath URL based on the values provided in the API_ENV object.
   * @returns The `apiPath` being returned is a string that concatenates various API_ENV variables
   * to form a URL.
  */
  private apiPath(DATA_SOURCE: DATA_SOURCE): string {
    const url =
      `${API_ENV['protocol']}://` +
      `${API_ENV['subDomain'] ? API_ENV['subDomain'] + '.' : ''}` +
      `${API_ENV['domain']}:` +
      `${API_ENV['port']}/` +
      `${API_ENV['gateway'] ? API_ENV['gateway'] + '/' : ''}` +
      `${DATA_SOURCE}/` +
      `${API_ENV['apiVersion']}/` +
      `${API_ENV['prefix']}/`
      // + `${API_ENV['service']}`
    return url.trim()
  }

  /**
   * The function returns a HttpHeaders object with the 'Authorization' and 'Content-Type' headers set.
   * @returns The method is returning an instance of the HttpHeaders class.
  */
  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json'
    })
  }


  /**
   * The `auth` function sends a POST request to a specified API endpoint with the provided request
   * body, headers, and query parameters, and returns an Observable of the API response.
   * @param httpControllerArgs - The `httpControllerArgs` parameter is an object of type
   * `HttpControllerArg<RequestType>`. It contains the following properties:
   * @returns an Observable of type ApiResponse<ResponseType>.
   */
  public auth<RequestType, ResponseType>(httpControllerArgs: HttpControllerArg<RequestType>): Observable<ApiResponse<ResponseType>> {
    return this._HttpClient
      .post<ApiResponse<ResponseType>>(`${this.apiPath(httpControllerArgs.datasource)}/${httpControllerArgs.path}`, httpControllerArgs.body,
        {
          headers: new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded' }),
          params: new HttpParams({ fromObject: { ...httpControllerArgs.pagination, ...httpControllerArgs.queryParams } }),
          responseType: "json"
        }
      )
      .pipe(
        catchError(this.errorHandler),
      );
  };


}
