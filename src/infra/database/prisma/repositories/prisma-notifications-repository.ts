import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../../src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

// utilizo o decorator Injectable do nestJS com a classe PrismaNotificationRepository para permitir que a mesma seja injetada em caso de inversão de dependência
@Injectable()
// exporto a classe PrismaNotificationRepository cuja a qual tem a implementação da interface NotificationsRepository
export class PrismaNotificationRepository implements NotificationsRepository {
  // instâncio o construtor da classe NotificationsRepository que recebe como parâmetro uma variável privada chamada prismaService do tipo PrismaService
  constructor(private prismaService: PrismaService) {}

  // instâncio uma função como o nome de create cuja a qual recebe como parâmetro uma variável notification do tipo Notification e retorna uma Promose do tipo void, ou seja, uma função assíncrona que não retorna dado algum
  async create(notification: Notification): Promise<void> {
    // utilizo a função create da variável this.prismaService.notification recebida como parâmetro no constructor para criar uma notificação, enviando os dados da notificação recebida no parâmetro notification
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
      },
    });
  }
}
