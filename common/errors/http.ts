import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * This type define common the response error throw back from exceptions
 * @statusCode is status response error
 * @errorCode is code of service error
 * @message is message throw back from exceptions
 * @timestamp is timestamp
 */
export interface CommonError {
  statusCode: number;
  errorCode: number;
  message: string;
  timestamp: string;
}

// function to get error message
export interface BaseException {
  toJson: () => CommonError;
}

// define abstract class to implement for many error handle
export class HttpCommonException
  extends HttpException
  implements BaseException
{
  protected errorCode: number;
  protected statusCode: number;

  constructor(
    customErrorMessage: string,
    errorCode: number,
    statusCode: number
  ) {
    super(
      {
        message: customErrorMessage,
        errorCode: errorCode,
        statusCode: statusCode,
      },
      statusCode
    );
    this.message = customErrorMessage;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }

  toJson(): CommonError {
    return {
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      message: this.message,
      timestamp: new Date().toISOString(),
    };
  }
}

export class BadRequestException extends HttpCommonException {
  constructor(customMessage: string, errorCode: number) {
    super(customMessage, errorCode, HttpStatus.BAD_REQUEST);
  }

  toJson(): CommonError {
    const result = super.toJson();
    return result;
  }
}

export class NotFoundException extends HttpCommonException {
  constructor(customMessage: string, errorCode: number) {
    super(customMessage, errorCode, HttpStatus.NOT_FOUND);
  }

  toJson(): CommonError {
    const result = super.toJson();
    return result;
  }
}

export class AuthorizationException extends HttpCommonException {
  constructor(customMessage: string, errorCode: number) {
    super(customMessage, errorCode, HttpStatus.UNAUTHORIZED);
  }

  toJson(): CommonError {
    const result = super.toJson();
    return result;
  }
}
