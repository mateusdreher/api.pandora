import { IGiftRepository } from '../../repositories/IGiftRepository';
import { INumberRepository } from '../../repositories/INumberRepository';
import balanceService from '../../services/GiftBalancingService';

import { ISelectNumberDTO } from './SelectNumberDTO';

export class SelectNumberUseCase {
    
    constructor(
        private giftRepository: IGiftRepository,
        private numberRepository: INumberRepository
    ) { }

    async execute(dto: ISelectNumberDTO) {

        const nextGift = balanceService.balance(5, 5); // Retorna ual será o proximo presente 
                                                      // Liberado (fralda ou outro)
        
        if (nextGift === 'diaper') {
            //Libera fralda 
        }
        if (nextGift === 'any') {
            //Libera fralda e mimo
        }
    }
}