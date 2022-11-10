import styled from "styled-components";

const Main = styled.section `
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    background-color: black;
    width: 100%;

`
export default Main

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
    
`