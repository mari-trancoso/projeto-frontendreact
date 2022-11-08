import React from "react";
import { useState } from "react";
import { ImagemPlanetas } from "../Cards/style";

function Carrinho(props) {
    // const [subtotal, setSubTotal] = useState()

    let totalPreco = 0

    console.log(props)
    return (
        <>
            <h1>CARRINHO</h1>
            <div>
                <section>
                {props.listaCarrinho
                .map((planeta) => {
                    {totalPreco += Number(planeta.preco)}
                    return(<>
                        <p>{planeta.planeta}</p>
                        <p>{planeta.preco}</p>
                        {/* {setSubTotal(subtotal += planeta.preco)} */}
                       
                        {console.log(planeta.preco)}
                    </>)
                    
                })
                }
                {/* {totalPreco += Number(planeta.preco)} */}
                {console.log(totalPreco)}
                </section>
                <p>
                    {totalPreco}
                </p>

            </div>
        </>
    )
}

export default Carrinho