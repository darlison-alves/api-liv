export class EntityNotFoundError extends Error {
    constructor(msg: string = "Entity not found!") {
        super(msg)
    }
}