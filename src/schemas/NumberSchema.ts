import * as mongoose from 'mongoose';

export const numbeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: String,
  email: String,
  chosen_numbers: {
    type: Number,
    required: true
  },
  gift: {
    type: String,
    required: true,
    ref: 'gift',
    index: true
  }
}, { collection: 'number' }); 