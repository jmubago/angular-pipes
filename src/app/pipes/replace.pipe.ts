import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  
  transform(value: any, activar: boolean): any {
    if(activar){
      let replace: string = '';
      for (let i = 0; i < value.length; i++){
        replace += '*';
      }
      return replace;
    }else{
      return value;
    }
  }

}
