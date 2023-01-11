import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

// cria um controller, ou seja, uma rota com o nome notifications
@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  // crio uma rota com o método POST, cuja a qual recebe como parâmetro o body da requisição, o mesmo tem o tipo de classe definido na classe CreateNotificationBody, a classe também fica responsavel para validar os dados que recebemos da chamada
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    // uso desconstrução de objeto, ou seja, do body
    const { recipientId, content, category } = body;

    // instâncio uma variável desestruturada com o retorno da função execute da variável this.sendNotification recebida como parâmetro no constructor passando como parâmetro para a função execute os dados do body da chamada
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    // retorno um objeto com os dados da constante notification populada acima
    return { notification };
  }
}
