import React from "react";
import {Card, ImagemPlanetas, BotaoCarrinho, TextoCard} from "./style";
import carrinhoImagem from "../../imagem/imagem-carrinho.svg"

function Cards (props) {
    
    return  (
        <Card>
            <ImagemPlanetas src={props.planeta.imagem} alt="imagem de planeta"/>
            <TextoCard>
                <p>{`Id: ${props.planeta.id}`}</p>
                <p>{`Planeta: ${props.planeta.planeta}`}</p>
                <p>{`Descrição: ${props.planeta.descricao}`}</p>
                <p>{`Preço: ${props.planeta.preco}`}</p>
                <p>{`Tempo de Viagem: ${props.planeta.tempoDeViagem}`}</p>
            </TextoCard>
            <BotaoCarrinho>
                <button onClick={() =>props.addViagem(props.planeta)}>
                    <img src={carrinhoImagem} alt="" />
                </button>
            </BotaoCarrinho>
        </Card>
    )
}

export default Cards