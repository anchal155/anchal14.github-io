import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';

import {CountryService} from '../country.service';

import { HttpClient, HttpResponse} from '@angular/common/http';
import { Location } from '@angular/common';
import { Country } from '../country';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Pipe, PipeTransform } from '@angular/core';






@Component({
  selector: 'app-allcountriesinfo',
  templateUrl: './allcountriesinfo.component.html',
  styleUrls: ['./allcountriesinfo.component.css'],
  providers: [Location] 
})
export class AllcountriesinfoComponent implements OnInit {
      
  public allCountries:Country[];

  language:string;
   



            
  errorMessage:any;

  

  constructor(private service:CountryService, http:HttpClient,private location:Location) { }

  ngOnInit() {
  
   
        
    console.log("all countries in the world called");

    this.service.getData().subscribe(res => {

      this.allCountries= res;
    
      console.log(this.allCountries);


    });

 

    
  }

  public goBackToPreviousPage(): any {
    this.location.back()
  }



   
    
 
  }




    
  




