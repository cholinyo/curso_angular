import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';




const routes: Routes = [
 // { path: '', component: Component },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  {path: 'about', component: AboutComponent},
  {path: 'heroe/:id', component: HeroeComponent}

 // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
