import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

// decorator utilizado para instânciar um módulo que deve ser o principal da aplicação podendo importar outros módulos, os Controllers e os Providers que utilizarão esses Controllers
@Module({

  // neste módulo importo somente o HttpModule cuja o qual vai receber todas as chamadas HTTP e definir como ela deverão ser tratadas
  imports: [HttpModule]
})
export class AppModule {}
