import { Module } from '@nestjs/common';
import { AppController } from './apresentation/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { CardService } from './application/services/card.service';
import { CardController } from './apresentation/controllers/card.controller';
import { CardModule } from './card.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CardModule],
  controllers: [AppController, CardController],
  providers: [AppService, CardService],
})
export class AppModule {}
