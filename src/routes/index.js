import express from "express";
import livros from "./livrosRoutes.js";
import author  from "./authorRoutes.js";


const routes = (app) => { 
    app.route("/").get((req, res) => res.status(200).send("Curso De Node.JS"));

    app.use(express.json(), livros, author);
};

export default routes;  