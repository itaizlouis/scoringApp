import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddscoringComponent } from './addscoring/addscoring.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', 
  redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddscoringComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
