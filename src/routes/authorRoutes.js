import express from "express";
import AuthorController from "../Controles/controleAuthor.js";

const routes = express.Router();

routes.get("/authores", AuthorController.listarAuthores);
routes.get("/authores/:id", AuthorController.listarAuthorPorId);
routes.post("/authores", AuthorController.cadastrarAuthor);
routes.put("/authores/:id", AuthorController.atualizarAuthor);
routes.delete("/authores/:id", AuthorController.excluirAuthor);


export default routes;