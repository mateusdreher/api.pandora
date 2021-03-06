import { Router, Request, Response } from 'express';  
import { returnAlreadyTakenNumbersController } from './useCases/ReturnAlreadyTakenNumbersUseCase';
import { returnNexAvailableGiftController } from './useCases/ReturnNextAvailableGiftUseCase';
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

route.get('/number', (request: Request, response: Response) => {
    return returnAlreadyTakenNumbersController.handle(request, response);
});

route.get('/gift', (request: Request, response: Response) => {
    return returnNexAvailableGiftController.handle(request, response);
});

export { route };