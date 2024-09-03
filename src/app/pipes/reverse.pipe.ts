import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string){
    var resalt: string = "";
    for (let i = 0;  i <  ch.length; i++) {
      resalt= ch[i]+resalt;
      
    }
    return resalt ;
  }

}
