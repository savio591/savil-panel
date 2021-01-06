import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/user';
import Products from '../models/product'

interface Request { // Tipagem da imagem enviada pelo frontend
  user_id: string;
  product_id: string;
  productFilename: string;
};

class UpdateProductsImagesService {
  public async execute({ user_id, product_id, productFilename }: Request): Promise<User> {
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

    if (product.productImage) {
      const productImageFilePath = path.join(uploadConfig.directory, product.productImage);
      const productImageFileExists = await fs.promises.stat(productImageFilePath);

      if (productImageFileExists) {
        await fs.promises.unlink(productImageFilePath);
      }
    }

    product.productImage = productFilename;
    console.log(`${user_id} adicionou uma foto no produto ${product_id}`)

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateProductsImagesService;