import { uuid } from 'uuidv4';
import mongoose from 'mongodb' 

export class GiftEntity {
    public readonly id?: string;
    public name: string;
    public type: string;
    public size: string;
    public quantity: number;

    constructor(gift: GiftEntity) {
        this.name = gift.name;
        this.type = gift.type;
        this.size = gift.size;
        this.quantity = gift.quantity;
    }
}