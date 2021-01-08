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


// Rodapé do site
function ProductsList(props: ProductsProps) {
    const productTitle = props.productTitle;

    const [products, setProducts] = useState([])

    // Uso do useState e useEffect para receber a lista de produtos
    useEffect(() => {
        api.get('./products').then(response => {
            setProducts(response.data)
            console.log(response.data)
        })
    }, [])

    const bodyrequest = {
        "productName": "Alicate Amperímetro",
        "productDescription": "Um alicate amperímetro é um testador elétrico que combina um voltímetro com um medidor de corrente do tipo alicate.",
        "productCategory": "Equipamentos de elétrica",
        "productPrice": "R$ 53,00",
        "productQt": "1210 unidades",
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTAwNzIwMDEsImV4cCI6MTYxMDE1ODQwMSwic3ViIjoiMGE5ZjdkZDYtNTMzZi00ZTJmLTkxMzEtMGU2ODg3YWIyM2FiIn0.0ZeiX8I_GNfaCKmCtv8tx6FVRWW6o1THdIHTGVz3XYY"
    const bodyheader = {
        headers: { Authorization: `Bearer ${token}` }
    }

    useEffect(() => {
        api.post('./products', bodyrequest, bodyheader).then(response => {
            console.log(response.data)
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