import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto'
import { CreateNotificationBody } from './create-notification-body';

// cria um controller, ou seja, uma rota com o nome notifications
@Controller('notifications')
export class AppController {

  // inversão de dependência onde ao receber o parâmetro prisma do tipo PrismaService o mesmo esta sendo requisitado pelo construtor da classe AppController e não como comummente o contrario
  constructor(private readonly prisma: PrismaService) {}

  // crio uma rota com o método GET, cuja a qual retorna todos os dados da tabela notification com a função findMany()
  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  // crio uma rota com o método POST, cuja a qual recebe como parâmetro o body da requisição, o mesmo tem o tipo de classe definido na classe CreateNotificationBody, a classe também fica responsavel para validar os dados que recebemos da chamada
  @Post()
  async create(@Body() body: CreateNotificationBody) {

    // uso desconstrução de objeto, ou seja, do body
    const {recipientId, content, category} = body

    // uso a função create() do prisma e da tabela notification para criar um registro na tabela com os dados obtidos no body da chamada
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId
      }
    })
  }
}
