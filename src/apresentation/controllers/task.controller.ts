import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { TaskService } from "src/application/services/task.service";
import { Task } from "src/model/entities/task.entity";

@Controller("/tasks")
export class TaskController {

    constructor(private readonly cardService: TaskService){}

    @Get()
    public async getCards() {
        return await this.cardService.findAll(['card']);
    }

    @Post()
    public async create(@Body() card: Task) {
        return await this.cardService.create(card);
    }

    @Get(":id")
    public async findById( @Param("id") id: number ) {
        return await this.cardService.findById(id);
    }
}