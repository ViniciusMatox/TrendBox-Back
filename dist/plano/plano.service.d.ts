import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
export declare class PlanoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPlanoDto: CreatePlanoDto): Promise<{
        id: number;
        tipo: import(".prisma/client").$Enums.TipoPlano;
        preco: number;
    }>;
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
