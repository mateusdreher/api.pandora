import mongoose from 'mongoose';
import { GiftEntity } from './../../entities/GiftEntity';
import { IGiftRepository } from './../IGiftRepository';
import { GiftModel } from './../../models/GiftModel';

export class MongoGiftRepository implements IGiftRepository {
  
  async findByName(name: string): Promise<GiftEntity>{
    return await GiftModel.find({ name });
  
  }

  async findById(id: string): Promise<GiftEntity>{
    return await GiftModel.findById(id);
    
  }

  async findByType(type: string): Promise<GiftEntity>{
    return await GiftModel.find({ type });

  }

  async addQuantity(id: string, quantity: number): Promise<GiftEntity>{

    return await GiftModel.findByIdAndUpdate(id, { quantity }, { new: true });

  }
  
}