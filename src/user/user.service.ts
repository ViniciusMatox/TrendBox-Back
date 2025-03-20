import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(cpf: string) {
    return this.prisma.user.findUnique({ where: { cpf } });
  }

  async update(cpf: string, updateUserDto: Partial<CreateUserDto>) {
    return this.prisma.user.update({
      where: { cpf },
      data: updateUserDto,
    });
  }

  async remove(cpf : string){
    return this.prisma.user.delete({
      where : {cpf}
    })
  }
  
}
