//Service file used globally in the application which helps in fetching the data from API 

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from "rxjs";

import {Router, ActivatedRoute, RouterModule,Params} from '@angular/router'

import {map,catchError, tap} from 'rxjs/Operators';
import { Country } from './country';



    


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  

  
public country:Country[];
  

  constructor(private _http:HttpClient, router:Router, route:ActivatedRoute) {
    
   }

   //Handle exceptional Error
   private handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getData():Observable<any>{
    
        return this._http.get('https://restcountries.eu/rest/v2/all');

  } //method used to call the data of all the coutries of the world 

  public getAllCountriesByRegionAfrica():Observable<any>{
    
    return this._http.get('https://restcountries.eu/rest/v2/region/Africa');

 
} //method used to call the countries of Africa region using Observable as the data in API is JSON data 

public getAllCountriesByRegionAsia():Observable<any>{
    
  return this._http.get('https://restcountries.eu/rest/v2/region/Asia');


}//method used to call the countries of Asia region using Observable as the data in API is JSON data 


public getAllCountriesByRegionEurope():Observable<any>{
    
  return this._http.get('https://restcountries.eu/rest/v2/region/Europe');


}//method used to call the countries of Europe region using Observable as the data in API is JSON data

public getAllCountriesByRegionAmerica():Observable<any>{
    
  return this._http.get('https://restcountries.eu/rest/v2/region/Americas');


}//method used to call the countries of America region using Observable as the data in API is JSON data

public getAllCountriesByRegionAustralia():Observable<any>{
    
  return this._http.get('https://restcountries.eu/rest/v2/region/Oceania');


}//method used to call the countries of Australia region using Observable as the data in API is JSON data



public getCountryByName(currentName) {

return this._http.get('https://restcountries.eu/rest/v2/name' + '/' + currentName)
  


} //method used to call the API of single country given the selected country as parameter
   

   

  


    
}

 




