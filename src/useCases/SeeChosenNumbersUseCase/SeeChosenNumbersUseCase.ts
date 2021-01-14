import { IGiftRepository } from '../../repositories/IGiftRepository';
import { INumberRepository } from '../../repositories/INumberRepository';

import { ISeeChosenNumbersDTO } from './SeeChosenNumbersDTO';

export class SeeChosenNumbersUseCase {
    
    constructor(
        private giftRepository: IGiftRepository,
        private numberRepository: INumberRepository
    ) { }

    async execute(dto: ISeeChosenNumbersDTO) {

    }
}