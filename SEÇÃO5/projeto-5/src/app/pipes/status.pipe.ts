import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status:boolean): string {
    const statusInvalido = status === undefined || status === null;

    if(statusInvalido){
      return 'Status indisponivel ou invalido'
    }

    return status ? 'Ativo' : 'Inativo'
  }

}
