import mongoose from "mongoose";

const authroSchema = new mongoose.Schema ({
    id: {type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, require: true},
    nacionalidade: {type: String}
}, {versionKey: false } );


const author = mongoose.model("authores", authroSchema);

export  {author, authroSchema};