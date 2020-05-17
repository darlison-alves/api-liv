import { Injectable } from "@nestjs/common";
import { BaseService } from "./base.service";
import { Card } from "src/model/entities/card.entity";
import { Task } from "src/model/entities/task.entity";
import { CardRepository } from "src/infra/repositories/card.repository";

@Injectable()
export class CardService extends BaseService<Card> {
    constructor( private cardRepository: CardRepository ) {
        super(cardRepository)
    }

    public async addTask(id: number, task: Task): Promise<void> {
        const card = await this.repository.findOne(id);
        card.tasks.push(task);
        await this.repository.update(id, card);
    }
}