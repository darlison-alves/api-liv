import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseService<T> {
    protected repository: Repository<T>;
    
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    public async findAll(): Promise<Array<T>> {
        return await this.repository.find({ relations: ["tasks"]})
    }

    public async create(data: T): Promise<T> {
        const entity = await this.repository.save(data);
        return entity;
    }

    public async update(entity: T): Promise<T> {
       return await this.repository.save(entity)
    }
}