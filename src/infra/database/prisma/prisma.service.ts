import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// este decorator @Injectable() é utilizado para ser possível realizar inversão de dependência com a seguinte classe PrismaService
@Injectable()

// exporto a classe PrismaService cuja a qual extende a classe PrismaClient e implementa a interface OnModuleInit
export class PrismaService extends PrismaClient implements OnModuleInit {
  // intâncio a função onModuleInit
  async onModuleInit() {
    // cuja a qual realiza a conexão com o banco de dados
    await this.$connect();
  }

  // instâncio a função enableShutdownHooks cuja a qual recebe como parâmetro uma variável app do tipo INestApplication
  async enableShutdownHooks(app: INestApplication) {
    // seto um listner, no evento beforeExit, ou seja antes de sair chamando uma função assíncrona
    this.$on('beforeExit', async () => {
      // a função assincrona fecha a aplicação antes de finalizar a conexão com o banco de dados
      await app.close();
    });
  }
}
