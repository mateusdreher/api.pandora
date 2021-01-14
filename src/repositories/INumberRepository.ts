import { Number } from '../entities/Number';

export interface INumberRepository {
    findByName(name: string): Promise<Number>;
    findByPhone(phone: string): Promise<Number>;
    findByEmail(email: string): Promise<Number>;
    findById(id: string): Promise<Number>;
}