/* 
    O CreateProductService é o serviço CRUD entre o frontend e backend
        * Método execute: Cria o produto com dados recebidos do frontend
*/

import { getCustomRepository } from "typeorm";
import Product from "../models/product";
import ProductsRepository from "../repositories/ProductsRepository";

// Interface: Responsável pelas tipagens do Request do frontend
interface Request {
    productName: string;
    productDescription: string;
    productCategory: string;
    productPrice: string;
    productQt: string;
    productAddedAt: Date;
};



class CreateProductService {
    public async execute({ productName, productDescription, productCategory, productPrice, productQt, productAddedAt }: Request): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository);

        // Verificação se o produto já existe no banco de dados.
        const findProductInSameName = await productsRepository.findByName(
            productName);
        if (findProductInSameName) {
            throw Error('Este produto já foi cadastrado!');
        }

        // Prepara envio do produto para o banco de dados.
        const product = productsRepository.create({
            productName,
            productDescription,
            productCategory,
            productPrice,
            productQt,
            productAddedAt
        });

        await productsRepository.save(product); // O typeorm só envia para o repo banco de dados com o .save

        return product; // Retorna um JSON do que foi criado, útil para o front end.

    }
}

export default CreateProductService