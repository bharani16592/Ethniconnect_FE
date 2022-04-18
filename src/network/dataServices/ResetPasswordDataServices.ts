import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { APIConstants } from '../constants/APIConstants';



@Injectable({
  providedIn: 'root'
})
export class ResetPasswordDataService {
  password:string ='';
    emailId: String='';



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
        return `/api/v1/updatepassword?${'emailId='+this.password,'password='+this.password}`;
      }

      prepareRequestWithParameters(..._parameters: any[]) {
        this.emailId= _parameters[0]
        this.password=_parameters[1]
  
    }


      queryTheServer(data={}){
        const requestOptions:any = {};
        requestOptions['headers'] = this.requestHeaders();
        return this.http.put(this.baseURL()+this.methodName() ,data, requestOptions);
      }

}