import { Card } from "../entities/card.entity";

export class CardDto {
    public title: string;
    public task: number;

    constructor(card: Card) {
        this.title = card.title;
    }
}