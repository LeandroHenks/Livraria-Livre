import { author } from "../models/author.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na requisição` });
        }
    };

    static async listarLivroPorId (req, res) {
        try {
            const id =  req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na requisição do livro` });
        }
    };
    
    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await author.findById(novoLivro.author);
            const livroCompleto = { ...novoLivro, author: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message:  `${erro.message} - falha ao cadastrar livro` });
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id =  req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro Atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na atualização` });
        }
    };

    static async excluirLivro (req, res) {
        try {
            const id =  req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro Deletado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar ao deletar livro` });
        }
    };

};

export default LivroController;

