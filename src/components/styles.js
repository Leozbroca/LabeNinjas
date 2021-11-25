import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


 export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
export const Img = styled.img`
width: 50px;
`

export const FlexHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0px 1px 0px #00A8CC ; 

h1{
    margin-left: 20px;
}
button{
    margin: 0 60px ;
}

`
export const FooterFlex = styled.footer`
display: flex;
align-items: center;
justify-content: space-evenly;
position: absolute;
bottom: 0;
width: 100%;
background-color: #00A8CC;
`

export const Social = styled.img`
width: 50px;
`

export const Canais = styled.div`
display: flex;
justify-content: space-between;
div{
  margin:0 30px ;
} 
`

export const Global = styled.div`
display: grid;
grid-template-rows: 85px 1fr 100px;
font-weight: 500;
`

export const DivCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    p{
      display: flex;
    }
`




