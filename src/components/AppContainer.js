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
import DetalhesServicos from './DetalhesServicos'




export class AppContainer extends Component {
  state = {
    page: "home",
    listaServicos: [],
    jobDetalhes: {}
  }

  // ------------Função Geral------------

  togglePage = () => {
    switch (this.state.page) {
      case "home":
        return <C.DivHome>
          <C.CardHomeSemFlex>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in</p>
          </C.CardHomeSemFlex>

          <C.CardHome>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in</p>
          </C.CardHome>

        </C.DivHome>
        break
      case "queroSerUmNinja":
        return <Cadastro />
        break

      case "contrateUmServico":
        return <Servicos
          listaServicos={this.state.listaServicos}
          getAllJobs={this.getAllJobs}
          adicionarAoCarrinho={this.adicionarAoCarrinho}
          mudarPaginaDetalhe={this.mudarPaginaDetalhe}
        />
        break

      case "carrinho":
        return <Carrinho
          listaServicos={this.state.listaServicos}
          removendoDoCarrinho={this.removendoDoCarrinho}
          finalizarCompra={this.finalizarCompra}
        />
        break

      case "detalhe":
        return <DetalhesServicos 
        jobDetalhes={this.state.jobDetalhes}
        />
        break

      default:
        return <appContainer />
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

  mudarPaginaDetalhe = (id) => {
    this.setState({ page: "detalhe" })
    this.getJobById(id)
  }

  finalizarCompra = () => {
    for(let item of this.state.listaServicos){
      this.removendoDoCarrinho(item.id)
    }
    alert("Obrigado pela compra!")
  }
  
  // ------------Função API------------

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
      })
      .catch((err) => {
        console.log("erro", err)
      })
  }

  getJobById = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    axios.get(url, {
      headers: {
        Authorization: "944276f6-19c0-49d4-ab75-a9d3e31490f9"
      }
    })
      .then((res) => {
        this.setState({ jobDetalhes: res.data })
      })
      .catch((err) => {
        console.log("erro", err)
      })
  }

  render() {
    return (

      <C.Global>

        <C.GlobalStyle />

        <C.FlexHeader>

          <C.FlexHeader>
            <C.Img src={Logo} onClick={this.mudarPaginaHome} />
            <h1 onClick={this.mudarPaginaHome}>
              Labeninjas
            </h1>
          </C.FlexHeader>

          <div>

            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary" onClick={this.mudarPaginaCadastro} >
                Quero ser um ninja
              </Button>

              <Button variant="contained" color="primary" onClick={this.mudarPaginaServicos} >
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
            <C.Social src={FB} />
            <C.Social src={INSTA} />
            <C.Social src={TT} />
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


      </C.Global>
    )
  }
}
