import { ResponseSuccess } from './../../utils/ResponseSuccess';
import { StatusCodeEnum } from './../../utils/enums/StatusCodeEnum';
import { ResponseError } from './../../utils/ResponseError';
import { SelectNumberUseCase } from './SelectNumberUseCase';
import { Request, Response } from 'express';

export class SelectNumberController {

    constructor(private selectNumberUseCase: SelectNumberUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { people_name, people_phone, people_email, chosen_number, gift } = request.body;
        
        if (!people_name || !chosen_number || !gift) {
            console.log(new ResponseError(StatusCodeEnum.payloadError, 'Verify your payload'));
            return response.status(400).json({
                res: new ResponseError(StatusCodeEnum.payloadError, 'Verify your payload')
            });
        }

        try {

            const res = await this.selectNumberUseCase.execute({ people_name, people_phone, people_email, chosen_number, gift });

            return response.status(200).json({ 
                res: new ResponseSuccess(StatusCodeEnum.success, 'Número registrado com sucesso', res)
            });

        } catch (error) {
            return response.status(400).json({
                res: new ResponseError(StatusCodeEnum.httpError, (error.message || 'Unexpected Error'))
            }); 
        }
        
    }
}