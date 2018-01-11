import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ShopcartComponent} from './shopcart/shopcart.component';
import {DetailsComponent} from './details/details.component';
import {HomeComponent} from './home/home.component';
import {SiginComponent} from './sigin/sigin.component';
import {SigupComponent} from './sigup/sigup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'sigin', component: SiginComponent },
  { path: 'sigup', component: SigupComponent },
  { path: 'cart', component: ShopcartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
