import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

// decorator utilizado para instânciar um módulo que deve ser o principal da aplicação podendo importar outros módulos, os Controllers e os Providers que serão utilizados por esses Controllers
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
