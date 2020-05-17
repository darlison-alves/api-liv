import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaskRepository } from "./infra/repositories/task.repository";

@Module({
    imports:[TypeOrmModule.forFeature([TaskRepository])],
    exports:[TypeOrmModule]
})
export class TaskModule {}