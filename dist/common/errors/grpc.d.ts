import { RpcException } from "@nestjs/microservices";
export declare class CommonGRPCException extends RpcException {
    protected errorCode: number;
    message: string;
    constructor(customMessage: string, errorCode: number);
}
//# sourceMappingURL=grpc.d.ts.map