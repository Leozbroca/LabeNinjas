import React from "react";

export default class DetalhesServicos extends React.Component{
    
    render(){
        return(
            <div>Detalhes:
                {this.props.jobDetalhes.tittle} <br/>
                {this.props.jobDetalhes.description} <br/>
                {this.props.jobDetalhes.paymentMethods} <br/>
                {this.props.jobDetalhes.price} <br/>
                {this.props.jobDetalhes.dueDate} <br/>
            </div>
        )
    }
}