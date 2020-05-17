export class BaseError extends Error {
    public status: number = 400;
    constructor(msg: string, code: number) {        
        super(msg);
        this.status = code;
    }
}