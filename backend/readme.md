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

## Usando o CRUD via API RESTFUL

<b>1. Listagem de produtos:</b>

* Você pode retornar um JSON com produtos sem precisar de autenticação, basta fazer uma requisição simples:
  
    ```http
    GET http://localhost:3333/products
    ```

* A api irá retornar um ARRAY/JSON da seguinte forma (Produtos já cadastrados na minha máquina local.):

    ```json
    [
        {
            "id": "f8bae0ae-1014-4d77-9da7-9e2c32c56f90",
            "productName": "Alicate Amperímetro",
            "productImage": "c9de4247f4d62393e185-amperimetro.jpg",
            "productDescription": "Um alicate amperímetro é um testador elétrico que combina um voltímetro com um medidor de corrente do tipo alicate.",
            "productCategory": "Equipamentos de elétrica",
            "productPrice": "R$ 53,00",
            "productQt": "10 unidades",
            "productAddedAt": "2021-01-06T13:20:20.930Z"
        },
        {
            "id": "019d804b-8010-43f2-a107-2068c5c6baca",
            "productName": "Caneca MiniOda",
            "productImage": "01abd0863cc79662c8dd-caneca_babyoda.jpg",
            "productDescription": "Para suportar seu chefe em plena segunda-feira: de muito café você precisa!",
            "productCategory": "Cozinha",
            "productPrice": "R$26,40",
            "productQt": "192 unidades",
            "productAddedAt": "2021-01-06T13:23:01.869Z"
        }
        ]
    
    ```

<b>2. Criação de produtos:</b>

* 
