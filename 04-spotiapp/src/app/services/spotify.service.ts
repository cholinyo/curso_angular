import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root' //No hace falta declararlo en app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Servicio Spotify listo")
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDj6B2QYb9f-L3Z15s_rK1PlDhbGGfLBukrgk4aVzzd7JGghqhVv2FWe8aICuODnL_m7YMvYLD01_wH6AA'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})

  }

  getArtista(artista:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDj6B2QYb9f-L3Z15s_rK1PlDhbGGfLBukrgk4aVzzd7JGghqhVv2FWe8aICuODnL_m7YMvYLD01_wH6AA'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`, {headers});

  }

}