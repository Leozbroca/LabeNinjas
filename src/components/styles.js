import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

//----ESTILO APPCONTAINER----

export const Global = styled.div`
display: grid;
height: 100vh;
grid-template-rows: 100px 1fr 100px;
font-weight: 500;
`

//----Conteudo Header----

export const FlexHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;

  button {
    width: 150px;
    margin: 0 30px;
  }
}
h1{
    margin-left: 20px;
    cursor: pointer;
}
`

export const FooterFlex = styled.footer`
display: flex;
height: 100%;
align-items: center;
justify-content: space-evenly;
width: 100%;
background-color: #00A8CC;
`
// ----Conteudo Footer----

export const RedesSociais = styled.div`
display: flex;
flex-direction: column;
height: 100px;
justify-content: space-between;

h4 {
  margin: 5px 0px;
}

div {

  margin: 2px 0px;
  img {
    width: 50px;
  }
}
`

export const Canais = styled.div`
display: flex;
height: 100px;
justify-content: space-between;

div{
  margin: 0 10px;
  h4 {
    margin: 5px 0px;
  }
  p {
    margin: 3px 0px;
  }
} 
`

// ----Conteudo Central----

export const DisplayHome = styled.div `
display: flex;
` 

export const CardIcon = styled.div`
box-shadow: rgba(0, 168, 204, 0.8) 0px 10px 15px;
display: grid;
width: 50%;
grid-template-columns: repeat(3, 1fr);
border-radius: 10px;
margin-left: 15vh ;
margin-top: 15vh;
text-align: center;
padding: 15px;
`
export const CardHomeSemFlex = styled.div`
width: 35%;
margin-top: 5vh;
margin-left: 5vh;

p{
  text-align: justify;
}
`



export const HomeContent = styled.div`
  height: 100%;
`

export const Img = styled.img`
width: 50px;
cursor: pointer;
`

export const DivHome = styled.div`
display: flex;

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






