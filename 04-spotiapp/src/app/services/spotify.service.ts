import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //No hace falta declararlo en app.module.ts
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("Servicio Spotify listo")
  }

  getQuery(query: string){
  const URL=`https://api.spotify.com/v1/${query}`;

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBZ5s0O8937mM46DOAzMQc5o3n2Kitz6hl5qcZcUfD1S77EOPOhNVhV2gl5yZ_wACwlVYQbnRvCOEzbD8Q'
  });

  return this.http.get(URL , {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map (data => {
      return data['albums'].items
    }));
  } 

  getArtista(artista:string) {
    return this.getQuery(`search?q=${artista}&type=artist&limit=15`).pipe(map (data => {
      return data['artists'].items}));
  } ;

}