import { IsNotEmpty, IsUUID, Length } from 'class-validator';

// exporto a classe CreateNotificationBody que deve ser igual aos dados esperados no Body da chamada para criar uma nova notificação
export class CreateNotificationBody {
  // utilizo a função @IsNotEmpty() e @IsUUID() para respectivamente, verificar se o dado é nulo, e caso for levantar uma exception e não deixar inserir e como segunda função para verificar se o parâmetro é um UUID
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  // utilizo a função @IsNotEmpty() e @Length(5, 240) para respectivamente, verificar se o dado é nulo, e caso for levantar uma exception e não deixar inserir e como segunda função para verificar se o parâmetro é uma string e seu tamânho esta entre 5 e 240 caracteres
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  // utilizo a função @IsNotEmpty() para respectivamente, verificar se o dado é nulo, e caso for levantar uma exception e não deixar inserir
  @IsNotEmpty()
  category: string;
}
