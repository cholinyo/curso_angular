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
      'Authorization': 'Bearer BQDAoDvMNwyIpuFkoRa0iMqtWD8WQPbNghd556dPXD40diE1f79f-G0cJZDTbbsKfL1HIuO75cj02K5LU68'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})

  }

  getArtista(artista:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDAoDvMNwyIpuFkoRa0iMqtWD8WQPbNghd556dPXD40diE1f79f-G0cJZDTbbsKfL1HIuO75cj02K5LU68'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}`, {headers});

  }

}