import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  artistas : any[] = []
  loading : boolean;
  constructor(private spotify: SpotifyService) {
  }
  buscar(artista: string) {
    this.loading = true;
    console.log(artista);
    this.spotify.getArtista(artista).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
