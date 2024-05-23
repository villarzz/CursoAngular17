import { IAddress } from "./address.interface";

export interface IUser {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: IAddress;
  telefone: string;
  ativo: boolean;
  funcao: string;
  dataCadastro: string;
  status: Status;
}

export interface Status {
  online: boolean;
  veririficado: boolean;
  assinaturaAtiva: boolean;
  ultimoAcesso: string;
}


