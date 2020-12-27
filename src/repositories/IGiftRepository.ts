import { Gift } from '../entities/Gift';

export interface IGiftRepository {
    findByName(name: string): Promise<Gift>;
    findById(id: string): Promise<Gift>;
    findByType(type: string): Promise<Gift>;
    save(gift: Gift): Promise<Gift>;
}