import React, { useState, useEffect } from "react";

import api from "../services/api"
import '../styles/productsList.css';

interface ProductsProps {
    productTitle: string
}

interface ProductInfos {
    productName: string;
    productCategory: string;
    productPrice: string;
    productImage: string;
    key?: string;
}


// Container de produtos
function ProductsList(props: ProductsProps) {
    const productTitle = props.productTitle;

    const [products, setProducts] = useState([])

    // Uso do useState e useEffect para receber a lista de produtos
    useEffect(() => {
        api.get('./products').then(response => {
            setProducts(response.data)
        })
    }, [])


    return (
        <>
            <section className="productsList">
                <h1>{productTitle}</h1>
                <div className="containerProducts">
                    {products.map((product: ProductInfos) => (
                        <div key={product.productName} className="product">
                            <div className="category">
                                <h2>{product.productCategory}</h2>
                            </div>
                            <img src={`http://localhost:3333/files/${product.productImage}`}></img>
                            <div className="details">
                                <h3 className="productName">{product.productName}</h3>
                                <h3 className="productPrice">{product.productPrice}</h3>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )

}
export default ProductsList