import { Content } from './content';

// teste do content da notificação
describe('Notification content', () => {
  // teste para verificar se é possivel criar uma notificação
  it('should be able to create a notification content', () => {
    // utilizo a classe Content para criar uma nova notificação e atribuir o resultado na constante content
    const content = new Content('Você recebeu uma notificacao');

    // utilizo a função expect passando como parâmetro a constante content e utilizando a função toBeTruthy, para verificar se a variavel não é false, 0, '', null, undefined, ou NaN
    expect(content).toBeTruthy();
  });

  // teste para verificar se o conteúdo da notificação realmente retorna um erro caso a mesma contenha menos de 5 caracteres
  it('should not be able to create a notification content with less than 5 characters', () => {
    // utilizo a função expect passando como parâmetro uma arrow function com o constructor de uma classe content, com o tamanho menor que 5 caracteres, também utilizo a função toThrow para verificar a classe retornou algum erro ao criar a mesma
    expect(() => new Content('123')).toThrow();
  });

  // teste para verificar se o conteúdo da notificação realmente retorna um erro caso a mesma contenha mais de 240 caracteres
  it('should not be able to create a notification content with more than 240 characters', () => {
    // utilizo a função expect passando como parâmetro uma arrow function com o constructor de uma classe content, com o tamanho maior que 240 caracteres utilizando a função repeat do javascript para repetir o "123" por 240 vezes, também utilizo a função toThrow para verificar a classe retornou algum erro ao criar a mesma
    expect(() => new Content('123'.repeat(241))).toThrow();
  });
});
