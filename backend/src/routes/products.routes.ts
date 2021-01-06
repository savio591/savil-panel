/* 
    ProductsRoutes: recebe dados do frontend, envia para o CRUD e retorna em JSON.
 */

import 'reflect-metadata';

import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { parseISO } from 'date-fns';

import multer from 'multer';
import uploadConfig from '../config/upload';

import ProductsRepository from "../repositories/ProductsRepository";
import CreateProductService from "../services/CreateProductService";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateProductsService from '../services/UpdateProductsService';
import UpdateProductsImagesService from '../services/UpdateProductsImagesService';
import DeleteProductsService from '../services/DeleteProductsService';

const productsRouter = Router(); // Cria uma função para o protocolo http dos produtos.
const upload = multer(uploadConfig);


// Listagem dos produtos
productsRouter.get("/", async (request, response) => { // GET http://.../products
    const productsRepository = getCustomRepository(ProductsRepository); // Seleciona o repositório 'products' do banco de dados
    const products = await productsRepository.find(); // Recebe o repositório do banco de dados e envia para o back e front.

    return response.json(products) // retorna um JSON dos produtos para o frontend.
});

productsRouter.use(ensureAuthenticated); // Middleware de autenticação

// Criação de produtos 
productsRouter.post("/", async (request, response) => { // POST http://.../products
    try { // uso do try/catch para enviar mensagens de erro do backend log para o forntend.
        const {
            productName,
            productDescription,
            productPrice,
            productQt,
            productAddedAt,
            productCategory
        } = request.body;

        const parsedDate = parseISO(productAddedAt);

        const createProduct = new CreateProductService();

        const product = await createProduct.execute( // envia os dados do frontend para o serviço backend/database
            {
                productName,
                productDescription,
                productPrice,
                productQt,
                productCategory,
                productAddedAt: parsedDate
            });

        return response.json(product);
    }
    catch (err) {
        return response.status(400).json({ error: err.message }); // retorna um erro do log para o frontend
    }
});

// Edita o produto selecionado
productsRouter.put(
    '/:product_id/',
    ensureAuthenticated,
    async (request, response) => {
        try {
            const { product_id } = request.params;
            const { productName,
                productDescription,
                productPrice,
                productQt,
                productCategory } = request.body

            const updateProductsService = new UpdateProductsService();
            const product = await updateProductsService.execute({
                user_id: request.user.id,
                product_id,
                productName,
                productDescription,
                productPrice,
                productQt,
                productCategory
            })

            return response.json(product);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    },
);

// Adiciona imagens no produto
productsRouter.patch(
    '/:product_id/images',
    ensureAuthenticated,
    upload.single('image'),
    async (request, response) => {
        try {
            const { product_id } = request.params;

            const updateProductsImagesService = new UpdateProductsImagesService();
            const product = await updateProductsImagesService.execute({
                user_id: request.user.id,
                product_id,
                productFilename: request.file.filename,
            })

            return response.json(product);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    });

// Remove o produto selecionado
productsRouter.delete(
        '/:product_id',
        ensureAuthenticated,
        async (request, response) => {
            try {
                const { product_id } = request.params;

                const deleteProductsService = new DeleteProductsService();
                await deleteProductsService.execute({
                    user_id: request.user.id,
                    product_id
                })

                return response.status(200).json({ message: "O produto foi deletado com sucesso!"})
            } catch (err) {
                return response.status(400).json({ error: err.message });
            }
        },
    );

export default productsRouter