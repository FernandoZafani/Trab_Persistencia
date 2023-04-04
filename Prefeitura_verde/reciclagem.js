const mongoose = require("mongoose");
const uri="mongodb+srv://root:root@cluster0.dzz9frb.mongodb.net/Persistencia?retryWrites=true&w=majority";



const UsuarioSchema = mongoose.Schema({
    nome: String,
    senha: String,
    pontos: [{type: mongoose.Types.ObjectId, ref: "Reciclagems"}],
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
    const usuario = new Usario({nome : "Leonardo",senha : "123a",pontos: "642b62040bcd2eff3c223264",latitude: "200", longitude:"200"});
    return await usuario.save();
}

const insertpremio = async () => {
    const premio = new Premio({descricao : "teste",pontos : "1000", quantidade : "2"});
    return await premio.save();
}

const insertreciclagem = async () => {
    const reciclagem = new Reciclagem({descricao : "teste",pontos : "1000", quantidade : "2"});
    return await reciclagem.save();
}

mongoose.connect(uri).then(async(conn)=>{

    //insertpremio();
    insertusuario();
    //insertreciclagem();
    console.log("OK");

})

