import { IGiftRepository } from '../../repositories/IGiftRepository';
import { INumberRepository } from '../../repositories/INumberRepository';

import { ISelectNumberDTO } from './SelectNumberDTO';

export class SelectNumberUseCase {
    
    constructor(
        private giftRepository: IGiftRepository,
        private numberRepository: INumberRepository
    ) { }

    async execute(dto: ISelectNumberDTO) {

    }
}