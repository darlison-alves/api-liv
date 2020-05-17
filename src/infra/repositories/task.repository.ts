import { Repository, EntityRepository } from "typeorm";
import { Task } from "src/model/entities/task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}