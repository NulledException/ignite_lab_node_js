import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

// utilizo o decorador Module do nestJS para implementar um módulo cuja o qual deve fazer a comunicação HTTP com as chamadas API
@Module({
  // importo o DatabaseModule para criar a conexão com o banco de dados
  imports: [DatabaseModule],

  // utilizo como controller a classe NotificationsController cuja a qual cria uma notificação
  controllers: [NotificationsController],

  // e como provider utilizo a classe SendNotification cuja a qual realiza o envio da notificação criada pelo controller para o banco de dados
  providers: [SendNotification],
})

// exporto a classe HttpModule
export class HttpModule {}
