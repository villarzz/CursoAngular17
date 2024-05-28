import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone:string): string {
    const telefoneInvalido = !phone || phone.length < 10 || phone.length > 11;
    if(telefoneInvalido){
      return 'Telefone indisponivel ou inválido';
    }

    const celular = phone.length === 11;

    if(celular){
      return `(${phone.substring(0, 2)}) ${phone.substring(2,7)}-${phone.substring(7)}`;
    }else{
      return `(${phone.substring(0, 2)}) ${phone.substring(2,6)}-${phone.substring(6)}`;
    }
  }
}
