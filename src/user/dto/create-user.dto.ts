import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  planoId: number;
}
