import React from "react";
import {Card, ImagemPlanetas, BotaoCarrinho, TextoCard, PrimeiroBloco, SegundoBloco, ParagrafoValorPessoa} from "./style";
import carrinhoImagem from "../../imagem/imagem-carrinho.svg"
import { formatarPreco } from "../../formatacaoPreco";

function Cards (props) {
    
    return  (
        <Card>
            <ImagemPlanetas src={props.planeta.imagem} alt="imagem de planeta"/>
            <TextoCard>
                <PrimeiroBloco>
                    <p>{`Id: ${props.planeta.id}`}</p>
                    <BotaoCarrinho>
                        <button onClick={() =>props.addViagem(props.planeta)}>
                        <img src={carrinhoImagem} alt="" />
                        </button>
                    </BotaoCarrinho>
                </PrimeiroBloco>
                <SegundoBloco>
                    <p>{`Planeta: ${props.planeta.planeta}`}</p>
                    <p>{`Descrição: ${props.planeta.descricao}`}</p>
                    <p>{`Preço: ${formatarPreco.format(props.planeta.preco)}`}</p>
                    {/* <span>{priceFormatter.format(product.price)}</span> */}
                    <ParagrafoValorPessoa>*** Valor por pessoa ***</ParagrafoValorPessoa>
                    <p>{`Tempo de Viagem: ${props.planeta.tempoDeViagem}`}</p>
                </SegundoBloco>
            </TextoCard>
        </Card>
    )
}

export default Cards