import {Pipe, PipeTransform} from '@angular/core'
// Name pipes
@Pipe({name: 'exponentialStrength'})
// Trien khai 1 interface PipeTransform
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
