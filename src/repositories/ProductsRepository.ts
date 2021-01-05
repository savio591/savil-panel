/* 
    O ProductsRepository.ts é o CRUD entre servidor e banco de dados.
        * 
*/

import Product from "../models/product";
import { EntityRepository, Repository } from "typeorm";


@EntityRepository(Product) // Decora o model "Product" para o typeorm e chama a tabela do repositório dos produtos
class ProductsRepository extends Repository<Product> {
    public async findByDate(productAddedAt: Date): Promise<Product | null> {
        const findProduct = await this.findOne({
            where: { productAddedAt },
        })

        return findProduct || null
    }
}

export default ProductsRepository