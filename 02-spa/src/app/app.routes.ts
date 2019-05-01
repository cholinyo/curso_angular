import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';




const routes: Routes = [
 // { path: '', component: Component },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  {path: 'about', component: AboutComponent}

 // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
