import * as mongoose from 'mongoose';

const NumberSchema = new mongoose.Schema({
  people_name: {
    type: String,
    required: true
  },
  people_phone: String,
  people_email: String,
  chosen_number: {
    type: Number,
    required: true
  },
  gift: {
    type: String,
    required: true,
    ref: 'gift',
    index: true
  }
}, { collection: 'number'});

export const NumberModel = mongoose.model('NumberModel', NumberSchema);