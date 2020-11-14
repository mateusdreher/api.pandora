import { app } from './app';

const PORT = process.env.PORT || 3030;

try {
    app.listen(3030);

    console.log(`SUCESSO: Servidor rodando na porta ${PORT}` );
} catch (error) {
    console.log(error);
}
