import mongoose from 'mongoose';

let database: mongoose.Connection;

export const connect = () => {
  const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6yus3.mongodb.net/${process.env.DB_NAME}`;

  if (database) {
    return;
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  database = mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
}

export const disconnect = () => {

  if (!database) {
    return;
  }

  mongoose.disconnect();
};
