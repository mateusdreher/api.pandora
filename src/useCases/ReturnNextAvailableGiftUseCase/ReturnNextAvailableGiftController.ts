import { ResponseApi } from '../../utils/ResponseApi';
import { StatusCodeEnum } from './../../utils/enums/StatusCodeEnum';
import { ReturnNexAvailableGiftUseCase } from './ReturnNextAvailableGiftUseCase';
import { Request, Response } from 'express';

export class ReturnNexAvailableGiftController {

  constructor(private returnNexAvailableGiftUseCase: ReturnNexAvailableGiftUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {


    try {

      const res = await this.returnNexAvailableGiftUseCase.execute();

      return response.status(200).json({ 
        res: new ResponseApi(StatusCodeEnum.success, 'Sucesso', res)
    });


    } catch (error) {
      return response.status(400).json({
        res: new ResponseApi(StatusCodeEnum.httpError, (error.message || 'Unexpected Error'), '')
      }); 
    }
  }
}