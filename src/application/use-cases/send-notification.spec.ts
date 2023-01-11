import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

// teste do envio de notificação
describe('Send Notification', () => {
  // testo se é possível enviar uma notificação
  it('should be able to send a notification', async () => {
    // intâncio a constante notificationsRepository com o constructor da classe InMemoryNotificationsRepository, cuaj a qual cria uma simulação de um banco de dados
    const notificationsRepository = new InMemoryNotificationsRepository();

    // instâncio a constante sendNotification cuja a qual recebe o construtor da classe SendNotification que esta recebendo como parâmetro a constante criada acima notificationsRepository, que por sua vez seria a instância do banco de dados
    const sendNotification = new SendNotification(notificationsRepository);

    // instâncio uma constante desestruturando o retorna da função execute da constante sendNotification, passando como parâmetro uma mensagem que vai ser criada no banco que a classe SendNotification recebeu como parâmetro
    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    // verifico se a instância do banco de dados notificationsRepository.notifications tem o tamanho mínimo de 1, ou seja, se a mensagem acima foi criada no banco de dados
    expect(notificationsRepository.notifications).toHaveLength(1);

    // também verifico se a instância do banco de dados notificationsRepository.notifications na posição 0 é igual a constante notification, ou seja, se a mensagem salva no banco de dados acima está igual a mensagem enviada
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
