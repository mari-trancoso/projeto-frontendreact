import React from "react";
import { useState } from "react";
import { ImagemPlanetas } from "../Cards/style";
import { CarrinhoContainer } from "./styled";

function Carrinho(props) {
    let totalPreco = 0

    return (
        <CarrinhoContainer>
            <h1>CARRINHO</h1>
            <div>
                <section>
                {props.listaCarrinho
                .map((planeta) => {
                    {totalPreco += Number(planeta.preco)}
                    return(<>
                        <p>{planeta.planeta}</p>
                        <p>{planeta.preco}</p>
                        <button onClick={() => props.removeViagem(planeta)}>Remove</button>
                    </>)
                })
                }
                </section>
                <p>
                    {`Preço total: ${totalPreco}`}
                </p>
                <button>Finalizar compra</button>
            </div>
        </CarrinhoContainer>
    )
}

export default Carrinho