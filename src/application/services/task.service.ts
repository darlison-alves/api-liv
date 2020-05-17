import { BaseService } from "./base.service";
import { Task } from "src/model/entities/task.entity";
import { Injectable } from "@nestjs/common";
import { TaskRepository } from "src/infra/repositories/task.repository";

@Injectable()
export class TaskService extends BaseService<Task> {
    constructor(private taskRepo: TaskRepository) {
        super(taskRepo)
    }
}