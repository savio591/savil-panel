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
    productPrice: string;
    productQt: string
};



class CreateProductService {
    public async execute({ productName, productDescription, productPrice, productQt }: Request): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository);

        const product = productsRepository.create({
            productName,
            productDescription,
            productPrice,
            productQt
        });

        await productsRepository.save(product); // O typeorm só envia para o repo banco de dados com o .save

        return product; // Retorna um JSON do que foi criado, útil para o front end.

    }
}

export default CreateProductService