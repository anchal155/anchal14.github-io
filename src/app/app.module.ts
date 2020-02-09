import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './country.service';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';




import { RouterModule, Router } from '@angular/router';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';         //Components createa for different region and showing the signle country information
import { AustraliaComponent } from './australia/australia.component';
import { AmericasComponent } from './americas/americas.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AllcountriesinfoComponent } from './allcountriesinfo/allcountriesinfo.component';
import { SinglecountryviewComponent } from './singlecountryview/singlecountryview.component';
import {FilterPipe} from '../filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AfricaComponent,
    AsiaComponent,
    EuropeComponent,
    AustraliaComponent,
    AmericasComponent,
    HomeComponent,
    AllcountriesinfoComponent,
    SinglecountryviewComponent,
    FilterPipe


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
  
  

    RouterModule.forRoot([  
      {path: 'Home',component:HomeComponent},
      {path: '',redirectTo:'Home',pathMatch:'full'},// Routing used to route to a specific component
      {path:'africa',component:AfricaComponent}, 
      {path:'asia',component:AsiaComponent},
      {path:'australia',component:AustraliaComponent},
      {path:'americas',component:AmericasComponent},
      {path:'Europe',component:EuropeComponent},
      {path:'allCountriesInfo',component:AllcountriesinfoComponent},
      {path:'country/:Name',component:SinglecountryviewComponent}

    ])

  ],
  providers: [CountryService], //serive declared in provider to use it globally in the application
  bootstrap: [AppComponent]
})
export class AppModule { }
