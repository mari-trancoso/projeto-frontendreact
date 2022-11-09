import styled from "styled-components";

const Main = styled.section `
    margin-top: 30px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;

`

export default Main

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
`