import { RpcExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { Observable } from "rxjs";
import { RpcException } from "@nestjs/microservices";
export type ErrorMessageType = {
    statusCode: number;
    errors: string | string[];
};
export declare class RpcValidationFilter implements RpcExceptionFilter {
    catch(exception: RpcException, host: ArgumentsHost): Observable<any>;
}
//# sourceMappingURL=rpc-exception.filter.d.ts.map