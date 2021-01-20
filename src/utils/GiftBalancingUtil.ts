const balanceService = {
    balance(quantityDiaper: number, quantityOthersGifts ): string {

        const quantityGifts = quantityDiaper + quantityOthersGifts;
    
        const seventyPercent = quantityGifts * 0.7;
        if (quantityDiaper < seventyPercent) {
            return 'diaper';
        }
    
        return 'any';

    
    }
}

export default balanceService;