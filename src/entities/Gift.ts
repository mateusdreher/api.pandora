import { uuid } from 'uuidv4';

export class Gift {
    public readonly id?: string;
    public name: string;
    public type: string;
    public size: string;
    public quantity: number;

    constructor(gift: Gift) {
        this.name = gift.name;
        this.type = gift.type;
        this.size = gift.size;
        this.quantity = gift.quantity;
        this.id = gift.id ? gift.id : uuid();
    }
}