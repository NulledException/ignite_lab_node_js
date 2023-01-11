// exporto a classe Content
export class Content {
  // a classe contém uma variável de apenas leitura do tipo string com o nome de "content"
  private readonly content: string;

  // seto o getter com o nome de value e com o tipo de retorno string
  get value(): string {
    // retorno a variavel this.content
    return this.content;
  }

  // crio uma função privada cuja a qual recebe como parâmetro uma variável content do tipo string e retorna um booleano com o nome de validadeContentLength
  private validadeContentLength(content: string): boolean {
    // retorno a verificação de tamanho do content, o mesmo deve ser maior ou igual a 5 e menor ou igual a 240
    return content.length >= 5 && content.length <= 240;
  }

  // instâncio o construtor da classe Content, o memo recebe como parâmetro uma variável content do tipo string
  constructor(content: string) {
    // atribuo a constante isContentLengthValid o retorno da função validadeContentLength passando como parâmetro o content recebido por parâmetro
    const isContentLengthValid = this.validadeContentLength(content);

    // caso a constante isContentLengthValid for false, ou seja, não passou pela validação presente na função validadeContentLength então
    if (!isContentLengthValid) {
      // disparo um erro falando que o o tamanho do content não é valido
      throw new Error('Content length is not valid.(expect [>=5, <=240])');
    }

    // caso tenha passado por todas as validações então seto o valor do this.content com a variável content recebida como parâmetro no construtor
    this.content = content;
  }
}
