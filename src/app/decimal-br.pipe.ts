import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalBr'
})
export class DecimalBrPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().replace(",","&").replace(".",",").replace("&",".");
  }

}
