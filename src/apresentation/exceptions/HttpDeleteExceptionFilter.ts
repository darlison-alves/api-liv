import { ExceptionFilter, ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { Response, Request } from "express";
import { BaseError } from "src/application/services/exceptions/BaseError";
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError)
export class HttpDeleteExceptionFilter implements ExceptionFilter {
    
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = 400;

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: "existe tarefas associadas ao card, deve primeiro realocar ou remove-las!"
        });
    }

}