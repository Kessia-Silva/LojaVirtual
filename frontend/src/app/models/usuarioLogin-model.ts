export enum TipoUsuario {
  ADMIN = "ADMIN",
  CLIENTE = "CLIENTE"
}

export interface Usuario {
  id: string;         // Recebido do back como Long, armazenado como string
  nome: string;
  email: string;
  senha: string;
  cep:string;
  estado: string;
  endereco : string;
  tipo: TipoUsuario;  // Enum para garantir consistência com o back
}
