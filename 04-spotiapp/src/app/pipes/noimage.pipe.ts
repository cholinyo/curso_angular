import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any, args?: any): string {

    if (!imagenes) {
      
    }
    if (imagenes.length) {
    return imagenes[0].url;
    } else {
      return "assets/img/noimage.png"
    }
  }

}
