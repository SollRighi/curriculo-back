import Express from "express";
import { send } from "process";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Comentario } from "./Comentario";
import { Contato } from "./Contato";
import cors from "cors";

createConnection({
    type:'postgres',
    host: 'ec2-100-25-72-111.compute-1.amazonaws.com',
    port: 5432,
    username: "tbneegnsoznbzi",
    password: "34b0e894eacaa337306254a9450d78d65a752f918e131733915ca9ebc15c0655",
    database: "d4mddf7472tp48",
    //url: 'postgres://tbneegnsoznbzi:34b0e894eacaa337306254a9450d78d65a752f918e131733915ca9ebc15c0655@ec2-100-25-72-111.compute-1.amazonaws.com:5432/d4mddf7472tp48',
    entities: [Comentario, Contato],
    synchronize: true,
    logging: true,
    extra: {
         ssl: {
            "rejectUnauthorized": false
          }
    }
}).then (connection => {
    console.log("conectou no banco de dados")
}).catch(error => console.log(error));

const app = Express();
app.use(Express.json());
app.use(cors());

const PORT = 8000;

app.post('/comentario', async (req, res) => {
    const nome = req.body.nome
    const comentario = req.body.comentario

    const registro = new Comentario();
    registro.nome = nome
    registro.comentario = comentario

    await registro.save()

    res.send ("O comentário foi salvo!")

});

app.get('/comentarios', async (req, res) => {
    const comentarios = await Comentario.find()

    res.send(
        comentarios
    )

})

app.post('/contato', async (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const mensagem = req.body.mensagem


    const registro = new Contato();
    registro.nome = nome
    registro.email = email
    registro.telefone = telefone
    registro.mensagem = mensagem

    await registro.save();

    res.send ("Os seus dados estão salvos, em breve entrarei em contato");

})















app.listen(PORT, () => {
    console.log(`server rodando`);
});






