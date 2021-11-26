import React from "react";

export default class Servicos extends React.Component {

    state = {
        valorMin: "",
        valorMax: "",
        buscaServico: "",
        ordenacao: "titulo"
    }

    // ------------Função Geral------------

    componentDidMount = () => {
        this.props.getAllJobs()
    }

    onChangeInputValorMin = (e) => {
        this.setState({ valorMin: e.target.value })
    }

    onChangeInputValorMax = (e) => {
        this.setState({ valorMax: e.target.value })
    }

    onChangeInputBuscaServico = (e) => {
        this.setState({ buscaServico: e.target.value })
    }

    onChangeSelectOrdenacao = (e) => {
        this.setState({ ordenacao: e.target.value })
    }

    render() {
        
        const servicos = this.props.listaServicos.filter((item) => {
            return item.title.toLowerCase().includes(this.state.buscaServico.toLowerCase()) || item.description.toLowerCase().includes(this.state.buscaServico.toLowerCase())
        })

            .filter((item) => {
                return this.state.valorMin === "" || item.price >= this.state.valorMin
            })

            .filter((item) => {
                return this.state.valorMax === "" || item.price <= this.state.valorMax
            })

            .sort((item, item2) => {
                switch (this.state.ordenacao) {
                    case "titulo":
                        return item.title.localeCompare(item2.title)
                        break;
                    case "menor valor":
                        return item.price - item2.price
                        break;
                    case "maior valor":
                        return item2.price - item.price
                        break;
                    case "prazo":
                        return new Date(item.dueDate).getTime() - new Date(item2.dueDate).getTime()
                    default:
                        return "sem ordenacao"
                }
            })

            .map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.dueDate}</p>
                        <p>Ver detalhes</p>
                        <button onClick={() => this.props.mudarPaginaDetalhe(item.id)}>Detalhe Serviços</button>
                        <button onClick={() => this.props.adicionarAoCarrinho(item.id)}>Adicionar ao carrinho</button>
                    </div>
                )
            })

        return (

            <div>

                <div>

                    <input
                        placeholder="Valor Mínimo"
                        onChange={this.onChangeInputValorMin}
                    />
                    <input
                        placeholder="Valor Máximo"
                        onChange={this.onChangeInputValorMax}
                    />
                    <input
                        placeholder="Busca por título ou descrição"
                        onChange={this.onChangeInputBuscaServico}
                    />
                    
                    <select
                        onChange={this.onChangeSelectOrdenacao}
                        value={this.state.ordenacao}
                    >
                        <option value="sem ordenacao">Sem Ordenação</option>
                        <option value="menor valor">Menor Valor</option>
                        <option value="maior valor">Maior Valor</option>
                        <option value="titulo">Título</option>
                        <option value="prazo">Prazo</option>
                    </select>
                </div>

                <div>{servicos}</div>

            </div>
        )
    }
}