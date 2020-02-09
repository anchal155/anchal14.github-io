import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router'; //To route 

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http'; // to fetch the request from API

import { CountryService } from '../country.service';// service file for fetching the data from API and used globallyin the application

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'; //used to make images reponsive in the app 


import { Location } from '@angular/common';
import { Observable } from 'rxjs'; 

import { map,switchMap } from 'rxjs/operators';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Country } from '../country';



@Component({
  selector: 'app-singlecountryview',
  templateUrl: './singlecountryview.component.html',
  styleUrls: ['./singlecountryview.component.css']
})
export class SinglecountryviewComponent implements OnInit {

      

      public country;
  data: any;

        
        

 constructor( private _route:Router, private route:ActivatedRoute, private service:CountryService, private _http:HttpClient,public breakpointObserver: BreakpointObserver) {

  
  
      }

      

    
      ngOnInit() {

          let Name=this.route.snapshot.params['Name']; // used to call the api by parameter with route params activated route
          console.log(Name);

          this.service.getCountryByName(Name).subscribe(

            data => {

            console.log(data)
            this.country=data[0];
            console.log(this.country)
                    } //response result from JSON data

           
          )


          this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
          ]).subscribe( (state:BreakpointState) => {
            if (state.breakpoints[Breakpoints.XSmall]) {
                 console.log( 'Matches XSmall viewport');
            }
            if (state.breakpoints[Breakpoints.Small]) {
                 console.log( 'Matches Small viewport');
            }
            if (state.breakpoints[Breakpoints.Medium]) {
                 console.log( 'Matches Medium  viewport');
            }
            if (state.breakpoints[Breakpoints.Large]) {
      
                console.log( 'Matches Large viewport');
            }
            if (state.breakpoints[Breakpoints.XLarge]) {
      
               console.log( 'Matches XLarge viewport');   
            }
          });
        } // used to make the data responsive in multiple devices
         
    
       
      }
  
