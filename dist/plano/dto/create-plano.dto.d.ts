import { TipoPlano } from '@prisma/client';
export declare class CreatePlanoDto {
    id: number;
    tipo: TipoPlano;
    preco: number;
}
