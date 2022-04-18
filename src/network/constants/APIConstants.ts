
import { environment } from '../../environments/environment';
import { Component } from '@angular/core';
export class APIConstants {
    private static readonly BASEURL: string = environment.apiBaseURL ;

    public static baseURL(): string {
        return APIConstants.BASEURL;
    }

}
