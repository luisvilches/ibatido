import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { DesctacadosHomeComponent } from './desctacados-home/desctacados-home.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { CalugasHomeComponent } from './calugas-home/calugas-home.component';
import { BannersHomeComponent } from './banners-home/banners-home.component';
import { BannersInferioresComponent } from './banners-inferiores/banners-inferiores.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopcartComponent,
    DetailsComponent,
    HomeComponent,
    SiginComponent,
    SigupComponent,
    DesctacadosHomeComponent,
    SliderHomeComponent,
    CalugasHomeComponent,
    BannersHomeComponent,
    BannersInferioresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
