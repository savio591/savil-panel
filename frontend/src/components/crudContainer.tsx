import React from 'react'
import { IsLogged } from '../services/loginServices'

import '../styles/crudContainer.css'

// Container do CRUD dos produtos
function CrudContainer() {
    if (IsLogged().isLogged) {
        return (
            <>
                <section className="crud_container">
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
    else {
        return (
            <h1 className="permission_denied">Você não tem permissão de acessar esta página</h1>
        )
    }

}

export default CrudContainer