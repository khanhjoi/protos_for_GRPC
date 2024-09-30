import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { HttpCommonException } from '../errors/http';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpCommonException | HttpException, host: ArgumentsHost): Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=http-exception.filter.d.ts.map