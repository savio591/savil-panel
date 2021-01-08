# Savil Panel backend🧑🏽

## Requisitos
* Node.js LTS ou recente, disponível em: https: //nodejs.org/en/download
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
    GET http: //localhost:3333/products
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

* O CRUD do produto só funcionará se o usuário estiver autenticado. Portanto, primeiro você precisa fazer login pela api com um JSON com "username" e "password", como por exemplo:

    ```json
    {
    "username": "nomedousuario",
    "password": "senhadousuario"
    }
    ```

    para o backend:

    ```html
    GET http: //localhost:3333/session
    ```

    assim, o backend vai retornar um json com dados do usuário e um token de autenticação do tipo bearer.

* Se o token de autenticação não for inserido ou estiver errado, o backend irá retornar um erro.

* Pronto, agora é so mandar o request do tipo JSON com a autenticação bearer no cabeçalho, como por exemplo:

    ```json
    {
    "productName": "Alicate Amperímetro",
    "productDescription": "Um alicate amperímetro é um testador elétrico que combina um voltímetro com um medidor de corrente do tipo alicate.",
    "productCategory": "Equipamentos de elétrica",
    "productPrice": "R$ 53,00",
    "productQt": "10 unidades"
    }
    ```

* Caso o nome do produto já estiver cadastrado, o backend irá retornar um erro:
    ```json
    {
        "error": "Este produto já foi cadastrado!"
    }
    ```

<b>3. Adição de imagens:</b>

* Para adicionar imagem do produto, basta enviar o arquivo com 'image' no nome da requisição, a id do produto como parâmetro e terminado com /image. O método da requisição será do tipo PATCH na seguinte formatação:
  
   ```re
   PATCH localhost:3333/products/:id/image
    ```
* Obs: o ":id" é a id do produto.

* O backend irá retornar um JSON com os dados atualizados do produto.

<b>3. Edição e remoção de produtos</b>

* Para editar, basta mandar um JSON com os dados a serem editados, funciona tanto com dados totais quanto parciais, passando uma requisição com o parâmetro id do produto através do método PUT, como por exemplo:
    ```http
    PUT localhost:3333/39041f50-2a97-42a9-9fa0-35bf4356cb9f

* A formatação e dados são  da mesma forma de criação dos produtos. 

* O backend irá retornar um JSON com os dados atualizados do produto
    ```json
    {
    "id": "39041f50-2a97-42a9-9fa0-35bf4356cb9f",
    "productName": "Caneca MinYoda atualizado",
    "productImage": "5b5bd5181272ff4d2150-Caneca-Baby-Yoda.jpg",
    "productDescription": "Para suportar seu dia: de muito café você precisa!",
    "productCategory": "Cozinha",
    "productPrice": "R$26,40",
    "productQt": "10 unidades",
    "productAddedAt": "2021-01-08T02:18:15.194Z"
    }
    ```

* Para remover um produto, basta passar o parâmetro "id" do produto pelo método DELETE, como por exemplo:
    ```re
    DELETE localhost:3333/products/6aa00b61-3ce4-422e-8cb6-44746e822bea
    ```

* O backend irá retornar um JSON com a seguinte mensagem: 
    ```json
    {
  "message": "O produto foi deletado com sucesso!"
    }
    ```