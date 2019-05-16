import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'search', component: SearchComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
