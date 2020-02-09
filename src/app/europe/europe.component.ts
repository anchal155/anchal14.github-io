import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router'; // used to route from one component to other

import {CountryService } from '../country.service'; //service file to fetch the data

import { Location } from '@angular/common'; // imported to go to the particular location 

import {Country} from '../country'; // An interface file used to take the reuired field from the JSON data

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.css']
})
export class EuropeComponent implements OnInit {

  public allCountriesOfEurope:Country[];

  constructor(private router:Router, private _route:ActivatedRoute, private service:CountryService, private location:Location) { }

  ngOnInit() {

    this.service.getAllCountriesByRegionEurope().subscribe(res => {

      this.allCountriesOfEurope= res;//subscribe to get JSON data from API
    
      console.log(this.allCountriesOfEurope); //result in console 

  });

}
public goBackToPreviousPage(): any {
  this.location.back()
}

} //Method to go back to previous page 
