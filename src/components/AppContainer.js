import React, { Component } from 'react'
import Cadastro from './Cadastro'
import Servicos from './Servicos'
import Carrinho from './Carrinho'
import axios from 'axios'

export class AppContainer extends Component {
  state={
    page: "home",
    listaServicos: [],
  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  togglePage = () => {
    switch (this.state.page){
      case "home":
        return <p>Pronto para começar</p>
      case "queroSerUmNinja":
        return <Cadastro/>
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

  mudarPaginaCadastro = () => {
    this.setState({page: "queroSerUmNinja"})
  }

  mudarPaginaServicos = () => {
    this.setState({page: "contrateUmServico"})
  }

  mudarPaginaCarrinho = () => {
    this.setState({page: "carrinho"})
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
        this.setState({listaServicos: res.data.jobs})
        console.log(res)
    })
    .catch((err) => {
        console.log("erro", err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.mudarPaginaCadastro}>Quero ser um ninja</button>
        <button onClick={this.mudarPaginaServicos}>Contrate um serviço</button>
        <button onClick={this.mudarPaginaCarrinho}>Carrinho</button>
        {this.togglePage()}
      </div>
    )
  }
}
