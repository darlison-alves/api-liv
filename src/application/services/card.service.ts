import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { Card } from "src/model/entities/card.entity";
import { Task } from "src/model/entities/task.entity";
import { CardRepository } from "src/infra/repositories/card.repository";
import { CardDto } from "src/model/dto/card.dto";
import { TaskRepository } from "src/infra/repositories/task.repository";

@Injectable()
export class CardService extends BaseService<Card> {
    constructor( private cardRepository: CardRepository, private taskRepository: TaskRepository ) {
        super(cardRepository)
    }

    public async addTask(id: number, task: Task): Promise<void> {
        const card = await this.repository.findOne(id);
        card.tasks.push(task);
        await this.repository.update(id, card);
    }

    public async createCard(cardDto: CardDto): Promise<Card> {        
        const card = new Card( null, cardDto.title );
        card.tasks = [];
        if( cardDto.task ){
            const task = await this.taskRepository.findOne(cardDto.task);
            card.tasks.push(task)
        }
        return await this.cardRepository.save(card);
    }
}