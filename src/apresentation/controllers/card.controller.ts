import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CardService } from "src/application/services/card.service";
import { CardDto } from "src/model/dto/card.dto";

@Controller("/cards")
export class CardController {

    constructor(private readonly cardService: CardService){}

    @Get()
    public async getCards() {
        return await this.cardService.findAll(["tasks"]);
    }

    @Post()
    public async create(@Body() card: CardDto) {
        return await this.cardService.createCard(card);
    }

    @Get(":id")
    public async findById( @Param("id") id: number ) {
        return await this.cardService.findById(id, ['tasks']);
    }
}