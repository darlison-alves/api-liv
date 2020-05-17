import { BaseError } from "./BaseError";

export class EntityNotFoundError extends BaseError {    
    constructor(msg: string = "Entity not found!") {
        super(msg, 404);
    }
}