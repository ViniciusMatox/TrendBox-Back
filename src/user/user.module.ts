import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PasswordService } from 'src/auth/password.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UsersService, PasswordService],
})
export class UserModule {}
