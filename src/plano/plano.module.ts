import { Module } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importe aqui

@Module({
  imports: [PrismaModule], // <-- Adicione PrismaModule aqui
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
