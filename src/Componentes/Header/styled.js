import styled from "styled-components";
import imagemUniverso from "../../imagem/universo1.jpg"

export const HeaderContainer = styled.section `
    background-image: url(${imagemUniverso});
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TituloContainer = styled.div`
    height: 50vh;
    width: 100vw; 
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Titulo = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: white;
`

export const Filtros = styled.section`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
    padding-left: 12px;
`

export const Inputs = styled.section`
    display: flex;
    justify-content: space-between;
    width: 44%;
    height: 5vh;
`

export const Ordenacao = styled.section`
    height: 5vh;
    width: 25%;
    padding-right: 14px;
    color: white;
    display: flex;
    justify-content: space-between;

    label{
        font-size: 1.2rem;
    
    }
`