import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../constants/APIConstants';



@Injectable({
  providedIn: 'root'
})
export class FetchMenuByChefIdDataService {
    loginId:number=0
 
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
        return `/ChefmenuByChefloginid/${this.loginId}/`;
      }

      prepareRequestWithParameters(..._parameters: any[]) {
        this.loginId=_parameters[0]
    }


      queryTheServer(){
        const requestOptions:any = {};
        requestOptions['headers'] = this.requestHeaders();
        return this.http.get(this.baseURL()+this.methodName(), requestOptions);
      }

}