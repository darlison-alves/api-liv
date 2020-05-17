import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity("cards")
export class Card {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @OneToMany(type => Task, (task: Task) => task.card)
    public tasks: Array<Task>;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}