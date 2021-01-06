import { createConnection } from 'typeorm';

createConnection();

// Cria a conexão do backend com o banco de dados por meio do TypeORM
// As migrações são os ingredientes para a criação das tabelas e colunas do banco de dados.
// Para rodar as migrations(inicializar o banco de dados), digite `yarn typeorm migration:run`