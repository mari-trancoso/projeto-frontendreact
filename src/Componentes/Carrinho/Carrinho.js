import React from "react";
import { useState } from "react";
import { ImagemPlanetas } from "../Cards/style";
import { CarrinhoContainer, ItensCarrinho, SecaoPrecoFinal } from "./styled";

function Carrinho(props) {
    let totalPreco = 0

    return (
        <CarrinhoContainer>
            <h1>CARRINHO</h1>
            <div>
                <ItensCarrinho>
                {props.listaCarrinho
                .map((planeta) => {
                    {totalPreco += Number(planeta.preco)}
                    return(<section>
                        <p>Planeta escolhido: {planeta.planeta}</p>
                        <p>Valor individual: {planeta.preco}</p>
                        <button onClick={() => props.removeViagem(planeta)}>Remover</button>
                    </section>)
                })
                }
                </ItensCarrinho>
                <SecaoPrecoFinal>
                    <p>
                        {`Preço total: ${totalPreco}`}
                    </p>
                    <button>Finalizar compra</button>
                </SecaoPrecoFinal>
            </div>
        </CarrinhoContainer>
    )
}

export default Carrinho