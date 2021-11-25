import React, { Component } from 'react'
import Cadastro from './Cadastro'
import Servicos from './Servicos'
import Carrinho from './Carrinho'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Temas'
import Logo from '../IMG/logo.png'
import FB from '../IMG/fb.png'
import INSTA from '../IMG/insta.png'
import TT from '../IMG/tt.png'
import * as C from './styles'




export class AppContainer extends Component {
  state = {
    page: "queroSerUmNinja",
    listaServicos: [],
  }


  togglePage = () => {
    switch (this.state.page) {
      case "home":
        return <p>Pronto para começar</p>
      case "queroSerUmNinja":
        return <Cadastro />
      case "contrateUmServico":
        return <Servicos
          listaServicos={this.state.listaServicos}
          getAllJobs={this.getAllJobs}
          adicionarAoCarrinho={this.adicionarAoCarrinho}
        />
      case "carrinho":
        return <Carrinho
          listaServicos={this.state.listaServicos}
          removendoDoCarrinho={this.removendoDoCarrinho}
        />

      default:
        return <appContainer/>
    }
  }

  mudarPaginaHome = () => {
    this.setState({ page: "home" })
  }


  mudarPaginaCadastro = () => {
    this.setState({ page: "queroSerUmNinja" })
  }

  mudarPaginaServicos = () => {
    this.setState({ page: "contrateUmServico" })
  }

  mudarPaginaCarrinho = () => {
    this.setState({ page: "carrinho" })
  }

  adicionarAoCarrinho = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    const body = {
      "taken": true
    }

    axios.post(url, body, {
      headers: {
        Authorization: "944276f6-19c0-49d4-ab75-a9d3e31490f9"
      }
    })
      .then((res) => {
        alert("Item adicionado ao carrinho!")
        this.getAllJobs()
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  removendoDoCarrinho = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    const body = {
      "taken": false
    }

    axios.post(url, body, {
      headers: {
        Authorization: "944276f6-19c0-49d4-ab75-a9d3e31490f9"
      }
    })
      .then((res) => {
        alert("Item removido do carrinho!")
        this.getAllJobs()
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    axios.get(url, {
      headers: {
        Authorization: "944276f6-19c0-49d4-ab75-a9d3e31490f9"
      }
    })
      .then((res) => {
        this.setState({ listaServicos: res.data.jobs })
        console.log(res)
      })
      .catch((err) => {
        console.log("erro", err)
      })
  }

  render() {
    return (
      <C.Global>
        <C.GlobalStyle/>
        <C.FlexHeader>
          <C.FlexHeader>
          <C.Img src ={Logo} onClick={this.mudarPaginaHome}/>
          <h1>
            Labeninjas
          </h1>
          </C.FlexHeader>

          <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary"  onClick={this.mudarPaginaCadastro} >
          Quero ser um ninja
        </Button>

        <Button variant="contained" color="primary"  onClick={this.mudarPaginaServicos} >
           Contrate um serviço
        </Button>

        <Button variant="contained" color="primary" onClick={this.mudarPaginaCarrinho} >
            Carrinho
         </Button>
         </ThemeProvider>
         </div>
         </C.FlexHeader>
         <div>
         {this.togglePage()}
         </div>
         
         <C.FooterFlex>
           <div>
             <h3>Redes Sociais</h3>
             <C.Social src = {FB}/>
             <C.Social src = {INSTA}/>
             <C.Social src = {TT}/>
           </div>
          <C.Canais>
           <div>
             <h4>Atendimento:</h4>
             <p>0800-999-541</p>
             <p>sac@labeninjas.com</p>
             </div>

             <div>
              <h4>Endereço:</h4>
              <p>Travessa Itatiba, número</p>
           </div>
           </C.Canais>
         </C.FooterFlex>
         
        {/* <button onClick={this.mudarPaginaCadastro}>Quero ser um ninja</button>
        <button onClick={this.mudarPaginaServicos}>Contrate um serviço</button>
        <button onClick={this.mudarPaginaCarrinho}>Carrinho</button> */}
        </C.Global>
    )
  }
}
