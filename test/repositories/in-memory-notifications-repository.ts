import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

// exporto a classe InMemoryNotificationsRepository cuja a qual implementa a classe abstrata NotificationsRepository
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  // instâncio uma variável notifications cuja a qual deve ser do tipo array de Notification e logo após atribuo a ela um array vazio
  public notifications: Notification[] = [];

  // intâncio uma função chamada de create cuja a qual recebe como parâmetro uma variável notification do tipo Notification
  async create(notification: Notification) {

    // logo após realizo o push da notificação recebida por parâmetro na variável this.notifications intânciada acima
    this.notifications.push(notification);
  }
}
