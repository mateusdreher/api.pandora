import { ReturnAlreadyTakenNumbersController } from './ReturnAlreadyTakenNumbersController';
import { ReturnAlreadyTakenNumbersUseCase } from './ReturnAlreadyTakenNumbersUseCase';
import { MongoNumberRepository } from '../../repositories/implementations/MongoNumberRepository';

const mongoNumberRepository = new MongoNumberRepository();

const returnAlreadyTakenNumbersUseCase = new ReturnAlreadyTakenNumbersUseCase(mongoNumberRepository);

const returnAlreadyTakenNumbersController = new ReturnAlreadyTakenNumbersController(returnAlreadyTakenNumbersUseCase);

export { returnAlreadyTakenNumbersController };