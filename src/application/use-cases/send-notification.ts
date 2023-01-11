import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

// crio uma interface com o nome SendNotificationRequest cuja a qual especifica os dados esperados para enviar uma notificação
interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

// crio uma interface com o nome SendNotificationResponse cuja a qual especifica o tipo de retorno da classe SendNotification
interface SendNotificationResponse {
  notification: Notification;
}

// utilizo o decorator Injectable do nestJS para setar que a classe que esta sendo exportada possa ser injetada, ou seja, ter uma inversão de dependência
@Injectable()
// exporto a classe SendNotification
export class SendNotification {
  // instâncio o constructor da classe SendNotification cuaj o qual recebe uma variavel private, ou seja, que só pode ser acessada por dentro da classe do tipo NotificationsRepository, que deve ser um banco de dados
  constructor(private notificationRepository: NotificationsRepository) {}

  // instâncio uma função com o nome de execute cuja a qual recebe como parâmetro uma variável request do tipo SendNotificationRequest e retorna uma Promise do tipo SendNotificationResponse
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    // instâncio uma constante desestruturando o parâmetro request nas propriedades especificadas na interface SendNotificationRequest
    const { recipientId, content, category } = request;

    // instâncio uma constante notification cuja a qual utiliza o constructor da classe Notification passando para a mesma os dados da constante desestruturada acima, e por sua vez utilizando o construtor da classe Content para validar e criar o content da notificação
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // utilizo a função create do banco de dados recebido por parâmetro para criar uma notificação passando como parâmetro a constante Notification criada acima
    await this.notificationRepository.create(notification);

    // retorno um objeto com os dados da constante notification e com os dados da notificação criada acima
    return {
      notification,
    };
  }
}
