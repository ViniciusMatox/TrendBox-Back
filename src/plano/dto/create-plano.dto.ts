import { IsEnum, IsNumber, IsNotEmpty } from 'class-validator';
import { TipoPlano } from '@prisma/client';


export class CreatePlanoDto {
  @IsNumber()
  @IsNotEmpty()
  ID: number; 

  @IsEnum(TipoPlano)
  @IsNotEmpty()
  tipo: TipoPlano;

  @IsNumber()
  @IsNotEmpty()
  preco: number;
}
