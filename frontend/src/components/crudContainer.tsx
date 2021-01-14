import React from 'react'

import '../styles/crudContainer.css'

// Container do CRUD dos produtos
function CrudContainer() {
    return (
        <>
        <section>
            <h3>Produtos cadastrados:</h3>
            <div className="productsCRUD">
                <div className="productCRUD">
                    <p>Nome do produto</p>
                    <div><p>Editar</p></div>
                    <div><p>Remover</p></div>
                    <div className="productEdit">
                        <p>Nome do produto</p>
                        <p>Descrição do produto</p>
                        <p>Preço</p>
                        <p>Categoria</p>
                        <button className="addProductButton">Salvar</button>
                    </div>
                </div>
                <button className="addProductButton">Adicionar produto</button>
            </div>
        </section>
        </>
    )
}

export default CrudContainer