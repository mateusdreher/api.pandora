import { app } from './app';
import { connect } from './database/database';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3030;

try {
    app.listen(3030);

    connect();

    console.log(`SUCESSO: Servidor rodando na porta ${PORT}` );
} catch (error) {
    console.log(error);
}
