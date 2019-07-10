import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTo'
})
export class ConvertToPipe implements PipeTransform {

  transform(value: string,originalChar:string,convertedChar:string) {
    return value.replace(originalChar,convertedChar);
  }

}
