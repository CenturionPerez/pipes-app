import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, activate: boolean): string {
        return activate? value.toUpperCase(): value;
    }
}