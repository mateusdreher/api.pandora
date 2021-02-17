import { IGiftRepository } from './../../repositories/IGiftRepository';
import { INumberRepository } from '../../repositories/INumberRepository';

export class ReturnAlreadyTakenNumbersUseCase {
    
    constructor(
      private numberRepository: INumberRepository,
      private giftRepository: IGiftRepository
    ) { }

    async execute() {
      
      let alreadyTakenNumbers = [];
      const numbers = await this.numberRepository.findAll();

      for (const [index, item] of numbers.entries()) {

        const gift = await this.giftRepository.findById(item.gift);
        
        item.gift = gift.name;
        
        alreadyTakenNumbers.push(item);
      }

      return alreadyTakenNumbers;
    }
}