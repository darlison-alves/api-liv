import { ExceptionFilter, ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { Response, Request } from "express";
import { BaseError } from "src/application/services/exceptions/BaseError";

@Catch(BaseError)
export class HttpExceptionFilter implements ExceptionFilter {
    
    catch(exception: BaseError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception.status;

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }

}