
import "dotenv/config.js" 


import app from "./src/app.js";

// Definindo a porta onde o servidor irá escutar (neste caso, 3000)
const PORT = 3000;

// Iniciando o servidor Express e fazendo com que ele escute na porta definida (PORT)
app.listen(PORT, () => {
    console.log("Servidor Escutando!"); // Exibe uma mensagem no console quando o servidor estiver rodando e escutando requisições
});
