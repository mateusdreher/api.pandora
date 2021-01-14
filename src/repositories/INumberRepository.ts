import { NumberEntity } from './../entities/NumberEntity';

export interface INumberRepository {
    findByName(name: string): Promise<NumberEntity>;

    findByPhone(phone: string): Promise<NumberEntity>;

    findByEmail(email: string): Promise<NumberEntity>;

    findById(id: string): Promise<NumberEntity>;

    findByNumber(number: number): Promise<NumberEntity>;

    save(number: NumberEntity): Promise<any>;
    
    listSelectedNumbers(): Promise<NumberEntity>
}