// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Main from "./styled"
import { CardContainer } from "./styled"
import { useState } from "react"
import todasViagens from "./objetos"
import Cards from "./Componentes/Cards/Cards"
import Carrinho from "./Componentes/Carrinho/Carrinho"

function App(props) {
  
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")
  const [listaCarrinho, setListaCarrinho] = useState([])

  const addViagem = (viagem) => {
        setListaCarrinho([...listaCarrinho, viagem])
        console.log(viagem)
    }
  
  const removeViagem = (viagem) => {
    if(window.confirm("Tem certeza que quer remover esta viagem?")){
      const novaListaCarrinho = [...listaCarrinho]
      console.log(novaListaCarrinho)

      const index = novaListaCarrinho.indexOf(viagem)
      console.log(index)
      console.log(viagem)

      if(index > -1){
        novaListaCarrinho.splice(index, 1)
        setListaCarrinho(novaListaCarrinho)
      }
    }  
  }

  return (
    <div>
      <Header
        minPrice = {minPrice}
        setMinPrice = {setMinPrice}
        maxPrice = {maxPrice}
        setMaxPrice = {setMaxPrice}
        query = {query}
        setQuery = {setQuery}
        sortingParameter = {sortingParameter}
        setSortingParameter = {setSortingParameter}
        order = {order}
        setOrder = {setOrder}
      />
      <Main>
        <CardContainer>
        {todasViagens
        .filter((item) => {
          return item.planeta.toLocaleUpperCase().includes(query.toLocaleUpperCase()) 
        })
        .filter((item) => {
          return item.preco >= minPrice || minPrice === ""
        })
        .filter((item) => {
          return item.preco <= maxPrice || maxPrice === ""
        })
        .sort((a, b) => {
          return a.preco - b.preco
        })
        .sort(() => {
          if (order === "asc"){
            return 0
          } else {
            return -1
          }
        })
        .map((planeta)=>{
          return (
            <Cards  
              key={planeta.id}
              planeta={planeta}
              addViagem={addViagem}
              >
            </Cards>
          )
        })}
        </CardContainer>
        
        <Carrinho 
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
          todasViagens={todasViagens}
          removeViagem={removeViagem}
        >
        </Carrinho>
      </Main>
      
    </div>
  );
}

export default App;
