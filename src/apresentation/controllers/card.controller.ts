import { Controller, Get, Post, Body, Param, UseFilters, Patch, Delete } from "@nestjs/common";
import { CardService } from "src/application/services/card.service";
import { CardDto } from "src/model/dto/card.dto";
import { HttpExceptionFilter } from "../exceptions/HttpExceptionFilter";
import { HttpDeleteExceptionFilter } from "../exceptions/HttpDeleteExceptionFilter";

@Controller("/cards")
export class CardController {

    constructor(private readonly cardService: CardService){}

    @Get()
    public async getCards() {
        return await this.cardService.findAll(["tasks"]);
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    public async create(@Body() card: CardDto) {
        return await this.cardService.createCard(card);
    }

    @Get(":id")
    @UseFilters(new HttpExceptionFilter())
    public async findById( @Param("id") id: number ) {
        return await this.cardService.findById(id, ['tasks']);
    }

    @Patch('/add-new-task/:id')
    @UseFilters(new HttpExceptionFilter())
    public async addTask( @Param("id") idCard: number, @Body("idTask") idTask: number ) {
        await this.cardService.addTask(idCard, idTask);
        return "ok"
    }

    @Patch(":id")
    @UseFilters(new HttpExceptionFilter())
    public async update(@Param("id") id: number, @Body() carddto: CardDto){
        return await this.cardService.updateCard(id, carddto);
    }

    @Delete(":id")
    @UseFilters(new HttpDeleteExceptionFilter())
    public async remove(@Param("id") id: number){
        return await this.cardService.delete(id);
    }

}