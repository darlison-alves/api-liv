import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Card } from "./card.entity";

@Entity("tasks")
export class Task {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;
    
    @ManyToOne(type => Card, (card: Card) => card.tasks)
    public card: Card;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}