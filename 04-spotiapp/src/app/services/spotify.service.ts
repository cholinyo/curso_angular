import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //No hace falta declararlo en app.module.ts
})
export class SpotifyService {

  constructor() { 
    console.log("Servicio Spotify listo")
  }
}
