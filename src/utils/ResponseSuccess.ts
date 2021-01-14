import { StatusCodeEnum } from './enums/StatusCodeEnum';
export class ResponseSuccess {

  constructor(
    public statusCode: StatusCodeEnum,
    public message: string,
    public data: any
  ) { 
    return {statusCode, message, data }
  }
}