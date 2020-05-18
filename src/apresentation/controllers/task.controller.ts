import { Controller, Get, Post, Body, Param, UseFilters, UsePipes, ValidationPipe, Patch, Delete } from "@nestjs/common";
import { TaskService } from "src/application/services/task.service";
import { HttpExceptionFilter } from "../exceptions/HttpExceptionFilter";
import { TaskDTO } from "src/model/dto/task.dto";
import { QueryFailedError } from "typeorm";

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

    @Patch(":id")
    @UseFilters(new HttpExceptionFilter())
    public async update(@Param("id") id: number, @Body() task: TaskDTO){
        return await this.taskService.updateTask(id, task);
    }

    @Patch("/modify-card/:id")
    @UseFilters(new HttpExceptionFilter())
    public async updateCard(@Param("id") idTask: number, @Body("idCard") idCard: number) {
        return await this.taskService.updateCard(idTask, idCard);
    }

    @Delete(":id")
    @UseFilters(new HttpExceptionFilter())
    public async remove(@Param("id") id: number){
        return await this.taskService.delete(id);
    }
}