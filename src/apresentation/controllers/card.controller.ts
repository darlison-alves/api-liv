import { Controller, Get, Post, Body } from "@nestjs/common";
import { CardService } from "src/application/services/card.service";
import { Card } from "src/model/entities/card.entity";

@Controller("/cards")
export class CardController {

    constructor(private readonly cardService: CardService){}

    @Get()
    public async getCards() {
        return await this.cardService.findAll();
    }

    @Post()
    public async create(@Body() card: Card) {
        return await this.cardService.create(card);
    }
}