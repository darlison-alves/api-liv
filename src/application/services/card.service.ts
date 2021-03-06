import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { Card } from "src/model/entities/card.entity";
import { Task } from "src/model/entities/task.entity";
import { CardRepository } from "src/infra/repositories/card.repository";
import { CardDto } from "src/model/dto/card.dto";
import { TaskRepository } from "src/infra/repositories/task.repository";
import { EntityNotFoundError } from "./exceptions/EntityNotFoundError";

@Injectable()
export class CardService extends BaseService<Card> {
    constructor( private cardRepository: CardRepository, private taskRepository: TaskRepository ) {
        super(cardRepository)
    }

    public async addTask(id: number, idTask: number): Promise<void> {
        const card = await this.repository.findOne(id);
        const task = await this.taskRepository.findOne(idTask)
        card.tasks.push(task);
        await this.repository.update(id, card);
    }

    public async createCard(cardDto: CardDto): Promise<Card> {        
        const card = new Card( null, cardDto.title );
        card.tasks = [];
        if( cardDto.task ){
            const task = await this.taskRepository.findOne(cardDto.task);
            if(!task) throw new EntityNotFoundError('task not found!')
            card.tasks.push(task)
        }
        return await this.cardRepository.save(card);
    }

    public async updateCard(idCard: number, cardDto: CardDto): Promise<Card> {
        const card = await this.cardRepository.findOne(idCard);        
        card.title = cardDto.title
        return await this.update(card);
    }
}