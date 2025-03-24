import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';

@Injectable()
export class PlanoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlanoDto: CreatePlanoDto) {
    return this.prisma.plano.create({
      data: {
        ID: createPlanoDto.ID,
        tipo: createPlanoDto.tipo,
        preco: createPlanoDto.preco,
      },
    });
  }

  async findAll() {
    return this.prisma.plano.findMany();
  }

  async findOne(ID: number) {
    return this.prisma.plano.findUnique({ where: { ID } });
  }
  
    async update(cpf: string, updatePlano: Partial<UpdatePlanoDto>) {
      return this.prisma.user.update({
        where: { cpf },
        data: updatePlano,
      });
    }

}
