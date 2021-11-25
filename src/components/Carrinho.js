import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Temas'
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';



export default class Carrinho extends React.Component {

    calcularValorTotal = () => {
        let valorTotal = 0
        for (let item of this.props.listaServicos) {
            if (item.taken) {
                valorTotal += item.price
            }
        }
        return valorTotal
    }

    render() {
        const carrinho = this.props.listaServicos.map((item) => {
            if (item.taken) {
                return (<div key={item.id}>
                    {item.title}
                    ${item.price}
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary"  onClick={this.criarTrabalho} >
                        Remover
                        </Button>
                    </ThemeProvider>
                    {/* <button onClick={() => this.props.removendoDoCarrinho(item.id)}>remover</button> */}
                </div>)
            }
        })

        return (
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