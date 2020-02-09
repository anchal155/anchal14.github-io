import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute} from '@angular/router';

import {CountryService } from '../country.service';

import {Location } from '@angular/common';


@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css']
})
export class AustraliaComponent implements OnInit {

  public allCountriesOfAustralia;

  constructor(private router:Router, private _route:ActivatedRoute, private service:CountryService, private location:Location) { }

  ngOnInit() {

    this.service.getAllCountriesByRegionAustralia().subscribe(res => {

      this.allCountriesOfAustralia= res;
    
      console.log(this.allCountriesOfAustralia);

  });

}

public goBackToPreviousPage(): any {
  this.location.back()
}
}