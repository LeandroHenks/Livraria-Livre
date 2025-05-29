
// Importando o mongoose para se conectar ao MongoDB
import mongoose, { mongo } from "mongoose";

// Definindo a função assíncrona de conexão com o banco de dados
async function conectionBase() {
    
    await mongoose.connect(process.env.DB_CONNECTION_STRING);

    
    return mongoose.connection;
};


export default conectionBase;

