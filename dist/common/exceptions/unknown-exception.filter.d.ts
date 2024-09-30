import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
export declare class UnknownExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Response<any, Record<string, any>>;
}
//# sourceMappingURL=unknown-exception.filter.d.ts.map