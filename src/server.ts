import express from "express"; // O Express é responsável por servir o backend por meio do protocolo http.
import routes from "./routes/index";

import './database'; // Cria a conexão entre back e banco de dados

const app = express();
const port = 3333; // Porta do backend será 3333 e do frontend 80

app.use(express.json()); // Permite o envio e recebimento de JSON para variáveis e no protocolo.
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
});