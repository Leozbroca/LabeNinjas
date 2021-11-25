import React from "react";
import axios from "axios";



export default class Servicos extends React.Component{

    render(){
        console.log(this.props.listaServicos)
        const servicos = this.props.listaServicos.map((item) =>{
            return (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.dueDate}</p>
                    <button onClick={() => this.props.adicionarAoCarrinho(item.id)}>Adicionar ao carrinho</button>
                </div>
                )
        })
        return(
            <div>{servicos}</div>
        )
    }
}