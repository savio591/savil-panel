import express from 'express'; // O Express é responsável por servir o backend por meio do protocolo http.

const app = express();
const port = 3333; // Porta do backend será 3333 e do frontend 80

app.use(express.json()); // Permite o envio e recebimento de JSON para variáveis e no protocolo.

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
});