import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

// exporto a interface NotificationProps com os devidos dados esperados
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

// exporto a classe Notification cuja a qual
export class Notification {
  // contém duas variáveis, uma delas sendo o _id do tipo string
  private _id: string;

  // a outra variável é do tipo NotificationProps, que deve conter todos os dados esperados para uma notificação
  private props: NotificationProps;

  // Instâncio o constructor da classe Notification, cuja o qual recebe como parâmetro uma varaivel props do tipo NotificationProps cuja a qual utiliza um tipo por fora cuja o qual especifica que a propriedade createdAt pode ser undefined "?" ou do tipo Date
  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    // seto o this._id com o valor retornado da função randomUUID do node:crypto
    this._id = randomUUID();

    // seto o valor da this.props igual ao valor recebido das props, porém a propriedade createdAt, recebe o valor da recebida por parâmetro ou caso não seja informada recebe um new Date, ou seja, a data atual
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // getter da propriedade id
  public get id(): string {
    // apenas retorna o valor da propriedade this._id
    return this._id;
  }

  // setter da propriedade recipientId, cuja a qual recebe um recipientId do tipo string
  public set recipientId(recipientId: string) {
    // seta o valor da propriedade this.props.recipientId com o valor recebido por parâmetro
    this.props.recipientId = recipientId;
  }

  // getter da propriedade recipientId
  public get recipientId(): string {
    // apenas retorna o valor da propriedade this.props.recipientId
    return this.props.recipientId;
  }

  // setter da propriedade content, cuja a qual recebe um content do tipo Content
  public set content(content: Content) {
    // seta o valor da propriedade this.props.content com o valor recebido por parâmetro
    this.props.content = content;
  }

  // getter da propriedade content
  public get content(): Content {
    // apenas retorna o valor da propriedade this.props.content
    return this.props.content;
  }

  // setter da propriedade category, cuja a qual recebe um category do tipo string
  public set category(category: string) {
    // seta o valor da propriedade this.props.category com o valor recebido por parâmetro
    this.props.category = category;
  }

  // getter da propriedade category
  public get category(): string {
    // apenas retorna o valor da propriedade this.props.category
    return this.props.category;
  }

  // setter da propriedade readAt, cuja a qual recebe um readAt do tipo Date, null ou undefined
  public set readAt(readAt: Date | null | undefined) {
    // seta o valor da propriedade this.props.readAt com o valor recebido por parâmetro
    this.props.readAt = readAt;
  }

  // getter da propriedade readAt
  public get readAt(): Date | null | undefined {
    // apenas retorna o valor da propriedade this.props.readAt
    return this.props.readAt;
  }

  // getter da propriedade createdAt
  public get createdAt(): Date {
    // apenas retorna o valor da propriedade this.props.createdAt
    return this.props.createdAt;
  }
}
