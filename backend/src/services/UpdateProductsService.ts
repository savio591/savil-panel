import { getRepository } from 'typeorm';

import User from '../models/user';
import Products from '../models/product'

interface Request { // Tipagem do request enviado pelo frontend
    user_id: string;
    product_id: string;
    productName: string;
    productDescription: string;
    productCategory: string;
    productPrice: string;
    productQt: string;
};

class UpdateProductsService {
    // O serviço receberá os dados do frontend e enviará para o banco de dados e retorna todos os dados do produto editado.
    public async execute({ user_id, product_id, productName, productDescription, productCategory, productPrice, productQt }: Request): Promise<any> {
        const usersRepository = getRepository(User);
        const productsRepository = getRepository(Products);

        const user = await usersRepository.findOne(user_id);
        const product = await productsRepository.findOne(product_id);

        if (!user) {
            throw new Error('Você não está logado!');
        }

        if (!product) {
            throw new Error('Produto não cadastrado');
        }

        if (product) {
            const productRequested = {
                productName,
                productDescription,
                productCategory,
                productPrice,
                productQt
            };

            await productsRepository.update(product, productRequested);

            return productRequested;
        };

    }
}

export default UpdateProductsService