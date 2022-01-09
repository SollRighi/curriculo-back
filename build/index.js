"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Comentario_1 = require("./Comentario");
(0, typeorm_1.createConnection)({
    type: 'postgres',
    host: 'ec2-100-25-72-111.compute-1.amazonaws.com',
    port: 5432,
    username: "tbneegnsoznbzi",
    password: "34b0e894eacaa337306254a9450d78d65a752f918e131733915ca9ebc15c0655",
    database: "d4mddf7472tp48",
    entities: [Comentario_1.Comentario],
    synchronize: true,
    logging: true,
}).then(connection => {
    console.log("pedro chato");
}).catch(error => console.log(error));
const app = (0, express_1.default)();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`server rodando`);
});
