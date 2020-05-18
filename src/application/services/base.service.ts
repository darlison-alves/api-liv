import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { EntityNotFoundError } from "./exceptions/EntityNotFoundError";

@Injectable()
export class BaseService<T> {
    protected repository: Repository<T>;
    
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    public async findAll(relations: Array<string> = []): Promise<Array<T>> {
        return await this.repository.find({ relations })
    }

    public async create(data: T): Promise<T> {
        const entity = await this.repository.save(data);
        return entity;
    }

    public async update(entity: T): Promise<T> {
       return await this.repository.save(entity)
    }

    public async findById(id: number, relations: Array<string> = []) : Promise<T> {
        const entity = await this.repository.findOne(id, { relations });
        if(!entity) throw new EntityNotFoundError();
        console.log("entity", entity);
        return entity
    }

    public async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return result.affected ? true : false;
    }
}