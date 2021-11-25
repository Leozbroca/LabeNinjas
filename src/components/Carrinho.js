import React from "react";
import axios from "axios";

export default class Carrinho extends React.Component{

    calcularValorTotal = () => {
        let valorTotal = 0
        for(let item of this.props.listaServicos){
           if(item.taken){
            valorTotal += item.price
           }
        }
        return valorTotal
    }

    render(){
        const carrinho = this.props.listaServicos.map((item) => {   
            if(item.taken){
                return (<div key={item.id}>
                    {item.title}
                    ${item.price}
                    <button onClick={() => this.props.removendoDoCarrinho(item.id)}>remover</button>
                </div>)
            }
        })

        return(
            <div>
                <b>Carrinho</b>
                {carrinho}
                <div>
                    <p>Total: ${this.calcularValorTotal()}</p>
                    <button>Finalizar</button>
                </div>
            </div>
        )
    }
}