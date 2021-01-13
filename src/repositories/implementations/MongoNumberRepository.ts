import { NumberEntity } from './../../entities/NumberEntity';
import { NumberModel } from './../../models/NumberModel';
import { INumberRepository } from './../INumberRepository';


export class MongoNumberRepository implements INumberRepository {
  
  async findByName(name: string): Promise<NumberEntity> {
    
    return await NumberModel.find({ name });
  }


  async findByPhone(phone: string): Promise<NumberEntity>{ 
    
    return await NumberModel.find({ phone });
  }
  
  async findByEmail(email: string): Promise<NumberEntity>{
    
    return await NumberModel.find({ email });
  }

  async findById(id: string): Promise<NumberEntity>{
    
    return await NumberModel.findById(id);
  }

  async findByNumber(number: number): Promise<NumberEntity> {
    return await NumberModel.findOne({ chosen_number: number });
  } 

  async save(number: NumberEntity): Promise<any> {
    const data = new NumberModel(number);

    return await data.save();
    
  }

  async listSelectedNumbers(): Promise<NumberEntity> {

    return await NumberModel.find({}, 'choosen_numbers');
  }
}