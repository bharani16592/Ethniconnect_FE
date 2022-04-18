import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../constants/APIConstants';



@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordDataService {

    constructor(
        public http: HttpClient ,
      ) {
      }

      requestHeaders(): HttpHeaders {
        const headers = new HttpHeaders().
          set('accept', 'application/json').
          set('Content-Type', 'application/json')
         // set('Authorization', this.getToken());
        return headers;
        
      }

      getToken() {
        let token = localStorage.getItem('accessToken');
        if (token) {
          return 'Bearer ' + token;
        } else {
          return '';
        }
      }

      baseURL(): string  {
        return APIConstants.baseURL();
      }
    
      methodName(): string | undefined {
        return '/api/v1/resetpassword';
      }

      prepareRequestWithParameters(..._parameters: any[]) {
  
    }


      queryTheServer(data={}){
        const requestOptions:any = {};
        requestOptions['headers'] = this.requestHeaders();
        return this.http.post(this.baseURL()+this.methodName() ,data, requestOptions);
      }

}