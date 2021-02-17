import { MongoGiftRepository } from './../../repositories/implementations/MongoGiftRepository';
import { ReturnAlreadyTakenNumbersController } from './ReturnAlreadyTakenNumbersController';
import { ReturnAlreadyTakenNumbersUseCase } from './ReturnAlreadyTakenNumbersUseCase';
import { MongoNumberRepository } from '../../repositories/implementations/MongoNumberRepository';

const mongoNumberRepository = new MongoNumberRepository();
const mongoGiftRepository = new MongoGiftRepository();

const returnAlreadyTakenNumbersUseCase = new ReturnAlreadyTakenNumbersUseCase(mongoNumberRepository, mongoGiftRepository);

const returnAlreadyTakenNumbersController = new ReturnAlreadyTakenNumbersController(returnAlreadyTakenNumbersUseCase);

export { returnAlreadyTakenNumbersController };