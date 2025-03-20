import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Importe aqui

@Module({
  imports: [PrismaModule], // <-- Adicione PrismaModule aqui
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule {}
