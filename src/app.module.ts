import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './apresentation/controllers/app.controller';
import { CardController } from './apresentation/controllers/card.controller';
import { TaskController } from './apresentation/controllers/task.controller';

import { AppService } from './application/services/app.service';
import { CardService } from './application/services/card.service';
import { TaskService } from './application/services/task.service';

import { CardModule } from './card.module';
import { TaskModule } from './task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CardModule,
    TaskModule
  ],
  controllers: [AppController, CardController, TaskController],
  providers: [AppService, CardService, TaskService],
})
export class AppModule {}
