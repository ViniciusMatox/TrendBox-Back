import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlanoModule } from './plano/plano.module';

@Module({
  imports: [UserModule, PrismaModule, PlanoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
