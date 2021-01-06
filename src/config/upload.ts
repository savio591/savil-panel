import path from 'path'; // Módulo do node.js que define caminhos
import crypto from 'crypto'; // Módulo do node.js gerador de valores criptografados.
import multer from 'multer'; // Faz download de arquivos externos para a máquina local.

// Pasta onde o multer irá exportar os arquivos do frontend
const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp'); 

// Configurações do multer sobre o upload da imagem do produto.
export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const filehash = crypto.randomBytes(10).toString('hex');
      const fileName = `${filehash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};