# Savil Panel backend🧑🏽

## Requisitos
* Node.js LTS ou recente, disponível em: https://nodejs.org/en/download
* Yarn (recomendado, por uma melhor experiência com dependências), você pode instalar usando nodejs:
  
  `npm install -g yarn`

  ou via package manager, caso for linux ubuntu/mint, usando:

  `apt install yarn`

  ou pelo windows powershell com o chocolatey instalado usando:

  `choco install yarn`

 ----

## Rodando o backend
1. Primeiro, instalar as dependências do servidor executando yarn ou npm no seu terminal prefefido:
   
    `yarn` ou `npm install`

2. Executar o backend usando:
   
   `yarn dev:server` ou `npm run dev:server`

3. As tabelas e colunas do banco serão automaticamente criadas, basta inicializar o banco de dados PostgreSQL hospedado na nuvem com:
   
    `yarn database:run`

4. Caso o banco de dados já esteja inicializado ou precisa reverter as tabelas, executar 2x:
5. `yarn database:revert`

<br>

--------

<br>

