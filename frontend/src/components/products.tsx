import React from "react";
import '../styles/footer.css';

interface ProductsProps {
    productTitle: string
}
// Rodapé do site
function ProductsList(props: ProductsProps) {
    const productTitle = props.productTitle;

    return (
        <>
            <section className="productsList">
                <h1>{productTitle}</h1>
                <div className="containerProducts">
                    {/* Listagem dos produtos aqui */}
                </div>
            </section>
        </>
    )
}

export default ProductsList;