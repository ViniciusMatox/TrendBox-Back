import { PlanoService } from './plano.service';
export declare class PlanoController {
    private readonly planoService;
    constructor(planoService: PlanoService);
    findAll(): Promise<{
        id: number;
        tipo: import(".prisma/client").$Enums.TipoPlano;
        preco: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        tipo: import(".prisma/client").$Enums.TipoPlano;
        preco: number;
    } | null>;
}
