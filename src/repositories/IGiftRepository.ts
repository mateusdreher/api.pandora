import { GiftEntity } from './../entities/GiftEntity';
import { GiftModel } from './../models/GiftModel';

export interface IGiftRepository {
    findByName(name: string): Promise<GiftEntity>;
    findById(id: string): Promise<GiftEntity>;
    findByType(type: string): Promise<GiftEntity>;
    addQuantity(id: string, quanitity: number): Promise<GiftEntity>;
}