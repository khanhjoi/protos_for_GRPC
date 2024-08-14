import { RpcException } from "@nestjs/microservices";

export class CommonGRPCException extends RpcException {
  protected errorCode: number;
  message: string;

  constructor(customMessage: string, errorCode:number){
    super({
      message: customMessage,
      errorCode
    })
    this.errorCode = errorCode;
    this.message = customMessage;
  };
}
