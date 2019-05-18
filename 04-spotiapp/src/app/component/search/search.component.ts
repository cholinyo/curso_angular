import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  constructor(private spotify: SpotifyService) {}

  buscar (artista:string) {
    console.log(artista);
    this.spotify.getArtista(artista).subscribe(data => {
      console.log(data);
    })
  }
}
