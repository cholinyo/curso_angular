import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{  

  mostrar = "true"
frase : any = {
      mensaje: "Quien domina su ira domina a su peor enemigo",
      autor:"Vicente Caruncho"
    };
personajes : string []= ['Messi' , 'CR7' , 'Benzema'] 
};
