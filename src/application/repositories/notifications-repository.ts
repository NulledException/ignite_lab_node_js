import { Notification } from '../entities/notification';

// exporto a classe abstrata NotificationsRepository
export abstract class NotificationsRepository {

  // a classe NotificationsRepository tem uma abstração chamada de create cuja a qual recebe como parâmetro notification do tipo da classe Notification, com retorno uma Promise do tipo void, ou seja, uma função assíncrona sem retorno algum
  abstract create(notification: Notification): Promise<void>;
}
