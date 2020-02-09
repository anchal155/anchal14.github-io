import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {CountryService } from '../country.service';

import { Location } from '@angular/common'

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {

  public allCountriesOfAsia;

  constructor(private router:Router, private _route:ActivatedRoute, private service:CountryService, private location:Location) { }

  ngOnInit() {

    this.service.getAllCountriesByRegionAsia().subscribe(res => {

      this.allCountriesOfAsia= res;
    
      console.log(this.allCountriesOfAsia);

    });

    

  }
  public goBackToPreviousPage(): any {
    this.location.back()
  }

}
