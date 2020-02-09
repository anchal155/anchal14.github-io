import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import  { Location } from '@angular/common';

@Component({
  selector: 'app-americas',
  templateUrl: './americas.component.html',
  styleUrls: ['./americas.component.css']
})
export class AmericasComponent implements OnInit {

  public allCountriesOfAmerica;

  constructor(private router:Router, private _route:ActivatedRoute, private service:CountryService,private location:Location) { }

  ngOnInit() {
    this.service.getAllCountriesByRegionAmerica().subscribe(res => {

      this.allCountriesOfAmerica= res;
    
      console.log(this.allCountriesOfAmerica)
 
    });

    
    }
    public goBackToPreviousPage(): any {
      this.location.back()
    }

  }


