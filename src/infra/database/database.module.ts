import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

// utilizo o decorator Module do nestJS para definir as dependências do banco de dados para a classe DatabaseModule
@Module({
  // começo passando como parâmetro um objeto com a chave providers sendo um array com as classes
  providers: [
    // PrismaService cuja a qual contém a abstração da conexão com o Banco de Dados
    PrismaService,
    // logo após passo um outro objeto desestruturado
    {
      // com o provider NotificationsRepository cuja o qual deve ser utilizada na classe PrismaNotificationRepository
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  // logo após exporto a classe NotificationsRepository
  exports: [NotificationsRepository],
})

// exporto a classe DatabaseModule
export class DatabaseModule {}
