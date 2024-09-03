import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    var resalt: string = "";
    var voyel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
    for (let i = 0; i < ch.length; i++) {
     let inter = ch[i];
      for (let j = 0; j < voyel.length; j++) {
        if (inter == voyel[j]) {
          inter = "*"
          break
        } 

      }
      resalt+=inter;
    }
    return resalt
  }




}
