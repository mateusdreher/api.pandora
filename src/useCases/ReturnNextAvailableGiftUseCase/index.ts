import { ReturnNexAvailableGiftController } from './ReturnNextAvailableGiftController';
import { ReturnNexAvailableGiftUseCase } from './ReturnNextAvailableGiftUseCase';
import { MongoGiftRepository } from '../../repositories/implementations/MongoGiftRepository';

const mongoGiftRepository = new MongoGiftRepository();

const returnNexAvailableGiftUseCase = new ReturnNexAvailableGiftUseCase(mongoGiftRepository);

const returnNexAvailableGiftController = new ReturnNexAvailableGiftController(returnNexAvailableGiftUseCase);

export { returnNexAvailableGiftController };