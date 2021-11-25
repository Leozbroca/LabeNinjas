import React from "react";
import axios from "axios";

export default class DetalhesServicos extends React.Component{

    render(){
       
        return(
            <div>
                Detalhes
                <div>
                {this.props.jobDetalhes.title}<br/>
                {this.props.jobDetalhes.description}<br/>
                {this.props.jobDetalhes.paymentMethods}<br/>
                {this.props.jobDetalhes.price}<br/>
                {this.props.jobDetalhes.dueDate}<br/>
                </div>
            </div>

        )
    }
}