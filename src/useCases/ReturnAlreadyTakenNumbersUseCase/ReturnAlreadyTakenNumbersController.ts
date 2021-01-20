import { ResponseApi } from '../../utils/ResponseApi';
import { StatusCodeEnum } from './../../utils/enums/StatusCodeEnum';
import { ReturnAlreadyTakenNumbersUseCase } from './ReturnAlreadyTakenNumbersUseCase';
import { Request, Response } from 'express';

export class ReturnAlreadyTakenNumbersController {

  constructor(private returnAlreadyTakenNumbersUseCase: ReturnAlreadyTakenNumbersUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {


    try {

      const res = await this.returnAlreadyTakenNumbersUseCase.execute();

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