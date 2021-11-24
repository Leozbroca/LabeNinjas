import React from "react";
import axios from "axios";



export default class Servicos extends React.Component{
    state={
        listaServicos: [],
    }   

    componentDidMount = () => {
        this.getAllJobs()
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
            console.log("erro", err.response.data.error)
        })
    }

    render(){
        console.log(this.state.listaServicos)
        const servicos = this.state.listaServicos.map((item) =>{
            return (
                <div>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.dueDate}</p>
                </div>
                )
        })
        return(
            <div>{servicos}</div>
        )
    }
}