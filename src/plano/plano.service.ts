import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';

@Injectable()
export class PlanoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlanoDto: CreatePlanoDto) {
    return this.prisma.plano.create({
      data: {
        id: createPlanoDto.id, // Agora ele é obrigatório
        tipo: createPlanoDto.tipo,
        preco: createPlanoDto.preco,
      },
    });
  }

  async findAll() {
    return this.prisma.plano.findMany();
  }

  async findOne(id: number) {
    return this.prisma.plano.findUnique({ where: { id } });
  }
  
}
