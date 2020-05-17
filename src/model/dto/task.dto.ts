import { IsNotEmpty } from 'class-validator'

export class TaskDTO {
    
    @IsNotEmpty()
    public title: string;

    @IsNotEmpty()
    public idCard: number;
}