import { BaseService } from "./base.service";
import { Task } from "src/model/entities/task.entity";
import { Injectable } from "@nestjs/common";
import { TaskRepository } from "src/infra/repositories/task.repository";
import { TaskDTO } from "src/model/dto/task.dto";
import { CardRepository } from "src/infra/repositories/card.repository";
import { EntityNotFoundError } from "./exceptions/EntityNotFoundError";

@Injectable()
export class TaskService extends BaseService<Task> {
    constructor(private taskRepo: TaskRepository, private cardRepository: CardRepository) {
        super(taskRepo)
    }

    public async createNewTask(taskDTO: TaskDTO) {
        const card = await this.cardRepository.findOne(taskDTO.idCard);
        if(!card) throw new EntityNotFoundError('card not found!');
        const task = new Task( null, taskDTO.title);
        task.card = card;
        return await this.taskRepo.save(task);
    }
}