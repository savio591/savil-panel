import { getRepository } from 'typeorm';

import User from '../models/user';
import Products from '../models/product'

interface Request { // Tipagem do request enviado pelo frontend
    user_id: string;
    product_id: string;
};

class DeleteProductsService {
    // O serviço receberá o método do frontend e enviará para o banco de dados e retorna uma mensagem de sucesso.
    public async execute({ user_id, product_id }: Request): Promise<any> {
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

        await productsRepository.delete(product);

        return product;
    };

}

export default DeleteProductsService