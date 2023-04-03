const mongoose = require("mongoose");
const uri="mongodb+srv://root:root@cluster0.dzz9frb.mongodb.net/?retryWrites=true&w=majority";


const UsuarioSchema = mongoose.Schema({
    nome: String,
    senha: String,
    pontos: [{type: mongoose.Types.ObjectId, ref: "Reciclagem"}],
    latitude: Number,
    longitude: Number
});

const PremioSchema = mongoose.Schema({
    descricao: String,
    pontos: Number,
    quantidade: Number
});

const ReciclagemSchema = mongoose.Schema({
    item : Number,
    imagem: String,
    peso: Number,
    data: Date,
    pontos: Number
})

const Usario = new mongoose.model("Usario", UsuarioSchema);
const Premio = new mongoose.model("Premio", PremioSchema);
const Reciclagem = new mongoose.model("Reciclagem", ReciclagemSchema);

const insertusuario = async () => {
    const usuario = new Usario({nome : "Fernando",senha : "123a",pontos: "6407c49a080cc92f6d4b5418",latitude: "200", longitude:"200"});
    const save = await usuario.save();
    return resultado;
}

const insertpremio = async () => {
    const premio = new Premio({descricao : "teste",pontos : "1000", quantidade : "2"});
    const save = await premio.save();
    return resultado;
}

const insertreciclagem = async () => {
    const reciclagem = new Reciclagem({descricao : "teste",pontos : "1000", quantidade : "2"});
    const save = await reciclagem.save();
    return resultado;
}

insertpremio();
insertusuario();
insertreciclagem();
console.log("OK");