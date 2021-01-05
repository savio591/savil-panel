/* 
    ProductsRoutes: recebe dados do frontend, envia para o CRUD e retorna em JSON.
 */

import 'reflect-metadata';

import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';

import ProductsRepository from "../repositories/ProductsRepository";
import CreateProductService from "../services/CreateProductService";

const productsRouter = Router(); // Cria uma função para o protocolo http dos produtos.


// Listagem dos produtos
productsRouter.get("/", async (request, response) => { // GET http://.../products
    const productsRepository = getCustomRepository(ProductsRepository); // Seleciona o repositório 'products' do banco de dados
    const products = await productsRepository.find(); // Recebe o repositório do banco de dados e envia para o back e front.

    return response.json(products) // retorna um JSON dos produtos para o frontend.
});

// Criação de produtos 
productsRouter.post("/", async (request, response) => { // POST http://.../products
    try { // uso do try/catch para enviar mensagens de erro do backend log para o forntend.
        const {
            productName,
            productDescription,
            productPrice,
            productQt,
            productAddedAt
        } = request.body;

        const parsedDate = parseISO(productAddedAt);

        const createProduct = new CreateProductService();

        const product = await createProduct.execute( // envia os dados do frontend para o serviço backend/database
            {
                productName,
                productDescription,
                productPrice,
                productQt,
                productAddedAt: parsedDate
            });

        return response.json(product);
    }
    catch (err) {
        return response.status(400).json({ error: err.message }); // retorna um erro do log para o frontend
    }
});

export default productsRouter