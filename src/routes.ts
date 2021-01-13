import { Router, Request, Response } from 'express';  
import { selectNumberController } from './useCases/SelectNumberUseCase';

const route = Router();

route.get('/', (request: Request, response: Response) => {
    response.json({
        name: "Api Pandora",
        version: "2021.01",
        message: "Api works"
    });
});

route.post('/number', (request: Request, response: Response) => {
    return selectNumberController.handle(request, response);
});

export { route };