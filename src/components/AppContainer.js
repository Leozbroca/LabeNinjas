import React, { Component } from 'react'
import Cadastro from './Cadastro'
import Servicos from './Servicos'
import Carrinho from './Carrinho'
import axios from 'axios'

export class AppContainer extends Component {
  state={
    page: "home"
  }

  togglePage = () => {
    switch (this.state.page){
      case "home":
        return <p>Pronto para começar</p>
      case "queroSerUmNinja":
        return <Cadastro/>
      case "contrateUmServico":
        return <Servicos/>
      case "carrinho":
        return <Carrinho/>
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
