import { IGiftRepository } from '../../repositories/IGiftRepository';
import balanceService from '../../utils/GiftBalancingUtil';

export class ReturnNexAvailableGiftUseCase {
    
    constructor(private giftRepository: IGiftRepository) { }

    async execute() {
        let quantityDiapers = 0;

        const diapers = await this.giftRepository.findByType('F');
        const quantityOthers = await this.giftRepository.findByType('M');

        diapers.forEach((item) => {
            quantityDiapers += Number(item.quantity);
        });

        return balanceService.balance(quantityDiapers, quantityOthers[0].quantity);
        
    }
}