import express from 'express';

const app = express();
const port = 3333; // Porta do backend será 3333 e do frontend 80

app.use(express.json()); // Permite a utilização do JSON pelo express

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
});