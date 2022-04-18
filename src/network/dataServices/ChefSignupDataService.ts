import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../constants/APIConstants';



@Injectable({
  providedIn: 'root'
})
export class ChefSignupDataService {
  email:string ='';
  password:string='';


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
        return `/api/v1/registration?${'email='+this.email+'&'+'password='+this.password}`;
      }

      prepareRequestWithParameters(..._parameters: any[]) {
        this.email= _parameters[0]
        this.password=_parameters[1]
  
    }


      queryTheServer(data={}){
        const requestOptions:any = {};
        requestOptions['headers'] = this.requestHeaders();
        return this.http.post(this.baseURL()+this.methodName() ,data, requestOptions);
      }

}