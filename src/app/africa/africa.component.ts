import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CountryService } from '../country.service';

import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { SinglecountryviewComponent } from '../singlecountryview/singlecountryview.component';



     



@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css'],
  providers:[Location]
})

    

export class AfricaComponent implements OnInit {




      public allCountriesOfAfrica:[];


    
    







  constructor(  private service:CountryService, private http:HttpClient, private router:Router, private location:Location) {}

  

  
 

  ngOnInit() {

    
    this.service.getAllCountriesByRegionAfrica().subscribe(res => {

      this.allCountriesOfAfrica= res;
    
      console.log(this.allCountriesOfAfrica)

      
 
    });

    


    


    
    
    }

    
    public goBackToPreviousPage(): any {
      this.location.back()
    }
  

  
    
      
  }

  
      
     
  


