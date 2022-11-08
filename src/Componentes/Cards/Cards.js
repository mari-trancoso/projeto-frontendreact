import React from "react";
import {Card, ImagemPlanetas} from "./style";
import carrinhoImagem from "../../imagem/imagem-carrinho.svg"

function Cards (props) {
    
    return  <>
                <Card>
                    <ImagemPlanetas src={props.planeta.imagem} alt="imagem de planeta"/>
                    <p>{`Planeta: ${props.planeta.planeta}`}</p>
                    <p>{`Descrição: ${props.planeta.descricao}`}</p>
                    <p>{`Preço: ${props.planeta.preco}`}</p>
                    <p>{`Tempo de Viagem: ${props.planeta.tempoDeViagem}`}</p>
                    <button onClick={() =>props.addViagem(props.planeta)}>
                        <img src={carrinhoImagem} alt="" />
                    </button>
                </Card>
                
            </>
}

export default Cards