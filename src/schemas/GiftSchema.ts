import * as mongoose from 'mongoose';

export const giftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { collection: 'gift' }); 