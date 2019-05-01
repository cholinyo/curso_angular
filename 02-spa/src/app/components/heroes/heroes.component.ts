import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    heroes: Heroes[] = [];


  constructor(private _heroesService: HeroesService,
    private router:Router) {
      console.log ('Constructor');

   }


  ngOnInit() {
    console.log ('ngOnInit');
    this.heroes = this._heroesService.getheroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx] )


  }

}
