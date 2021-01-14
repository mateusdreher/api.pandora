import { SelectNumberController } from './SelectNumberController';
import { SelectNumberUseCase } from './SelectNumberUseCase';
import { MongoNumberRepository } from '../../repositories/implementations/MongoNumberRepository';
import { MongoGiftRepository } from './../../repositories/implementations/MongoGiftRepository';

const mongoNumberRepository = new MongoNumberRepository();

const mongoGiftRepository = new MongoGiftRepository();

const selectNumberUseCase = new SelectNumberUseCase(mongoGiftRepository, mongoNumberRepository);

const selectNumberController = new SelectNumberController(selectNumberUseCase);

export { selectNumberController };

