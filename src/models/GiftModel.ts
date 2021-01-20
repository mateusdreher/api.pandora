import * as mongoose from 'mongoose';

const GiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { collection: 'gift' }); 

export const GiftModel = mongoose.model('GiftModel', GiftSchema);