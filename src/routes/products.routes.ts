import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
// import { parseISO } from "date-fns";

import ProductsRepository from "../repositories/ProductsRepository";
// import CreateProductService from "../services/CreateProductService";

const productsRouter = Router();

productsRouter.get("/", async (request, response) => {
    const productsRepository = getCustomRepository(ProductsRepository);
    const products = await productsRepository.find();

    return response.json(products)
})

export default productsRouter