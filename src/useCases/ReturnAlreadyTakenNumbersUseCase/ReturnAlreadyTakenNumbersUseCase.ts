import { INumberRepository } from '../../repositories/INumberRepository';

export class ReturnAlreadyTakenNumbersUseCase {
    
    constructor(private numberRepository: INumberRepository) { }

    async execute() {
      
      let alreadyTakenNumbers = [];
      const numbers = await this.numberRepository.findAll();

      numbers.forEach((item) => {
        alreadyTakenNumbers.push(item.chosen_number);
      });
        
      return alreadyTakenNumbers;
    }
}