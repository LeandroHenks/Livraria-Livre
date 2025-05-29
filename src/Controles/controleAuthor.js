import { author } from "../models/author.js";

class AuthorController {

    static async listarAuthores (req, res) {
        try {
            const listaAuthor = await livro.find({});
            res.status(200).json(listaAuthor);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na requisição` });
        }
    };

    static async listarAuthorPorId (req, res) {
        try {
            const id =  req.params.id;
            const authorEncontrado = await livro.findById(id);
            res.status(200).json(authorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na requisição do Author` });
        }
    };
    
    static async cadastrarAuthor (req, res) {
        try {
            const novoAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: novoAuthor });
        } catch (erro) {
            res.status(500).json({ message:  `${erro.message} - falha ao cadastrar novo Author` });
        }
    };

    static async atualizarAuthor (req, res) {
        try {
            const id =  req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Author Atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar na atualização` });
        }
    };

    static async excluirAuthor (req, res) {
        try {
            const id =  req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({message: "Author Deletado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhar ao deletar Author` });
        }
    };

};

export default AuthorController;

