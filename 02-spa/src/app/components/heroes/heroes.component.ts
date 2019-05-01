import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroes } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

    heroes: Heroes[] = [];


  constructor(private _heroesService: HeroesService) {
      console.log ('Constructor');
   }


  ngOnInit() {
    console.log ('ngOnInit');
    this.heroes = this._heroesService.getheroes();
    console.log(this.heroes);
  }


}
