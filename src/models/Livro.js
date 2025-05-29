import mongoose, {mongo} from "mongoose";
import { authroSchema } from "./author.js";

// Definindo o esquema do modelo "livro"
const livroSchema = new mongoose.Schema({
    
    id: {type: mongoose.Schema.Types.ObjectId },
    
    
    titulo: {type: String, require: true},
    
    
    editora: {type: String},
    
    
    preco: {type: Number},
    
    
    paginas: {type: Number},

    author: authroSchema
}, {versionKey: false })  

// Criando o modelo 'livros' baseado no esquema definido acima
const livros = mongoose.model("livros", livroSchema);

// Exportando o modelo 'livros' para ser utilizado em outros arquivos
export default livros;
