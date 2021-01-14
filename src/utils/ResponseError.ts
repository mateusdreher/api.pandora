import { StatusCodeEnum } from './enums/StatusCodeEnum';

export class ResponseError {

  constructor(
    statusCode: StatusCodeEnum,
    message: string
  ) { 
    return {statusCode, message}
  }

  
}