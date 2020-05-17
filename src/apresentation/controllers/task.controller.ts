import { Controller, Get, Post, Body, Param, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "src/application/services/task.service";
import { Task } from "src/model/entities/task.entity";
import { HttpExceptionFilter } from "../exceptions/HttpExceptionFilter";
import { TaskDTO } from "src/model/dto/task.dto";

@Controller("/tasks")
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get()
    public async getCards() {
        return await this.taskService.findAll(['card']);
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    public async create(@Body() taskdto: TaskDTO) {
        return await this.taskService.createNewTask(taskdto);
    }

    @Get(":id")
    @UseFilters(new HttpExceptionFilter())
    public async findById( @Param("id") id: number ) {
        try {
            return await this.taskService.findById(id);    
        } catch (error) {
            throw error
        }
        
    }
}