import { NumberEntity } from './../../entities/NumberEntity';
import { IGiftRepository } from '../../repositories/IGiftRepository';
import { INumberRepository } from '../../repositories/INumberRepository';

import { ISelectNumberDTO } from './SelectNumberDTO';

export class SelectNumberUseCase {
    
    constructor(
        private giftRepository: IGiftRepository,
        private numberRepository: INumberRepository
    ) { }

    async execute(dto: ISelectNumberDTO) {

        const numberAlreadyExists = await this.numberRepository.findByNumber(dto.chosen_number);
    
        if (numberAlreadyExists) {
            throw new Error('Number Already was choosed');
        }

        const gift = await this.giftRepository.findById(dto.gift);
        
        if (!gift) {
            throw new Error('Gift not exists');
        }

        const number = new NumberEntity(dto);

        await this.numberRepository.save(dto);

        await this.giftRepository.addQuantity(gift.id, 1);

        
    }
}