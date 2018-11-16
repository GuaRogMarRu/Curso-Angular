import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitier:DomSanitizer){

  }

  transform(value:string, url:string): any {
    return this.domSanitier.bypassSecurityTrustResourceUrl( url + value);
  }

}
