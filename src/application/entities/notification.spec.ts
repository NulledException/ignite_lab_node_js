import { Content } from './content';
import { Notification } from './notification';

// teste da notificação
describe('Notification', () => {
  // testo se a notificação pode ser criada
  it('should be able to create a notification', () => {
    // instâncio uma constante notification cuja a qual recebe o valor do constructor da classe Notification, os dados utilizados são content, category e recipientId
    const notifification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    // utilizo a função expect passando como parâmetro a constante notification cuja a qual deve conter algum valor verdadeiro, ou seja, diferente de false, 0, '', null, undefined, e NaN testado pela função toBeTruthy
    expect(notifification).toBeTruthy();
  });
});
