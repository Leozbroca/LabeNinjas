import React from "react";
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Temas'
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';



export default class Carrinho extends React.Component {

    // ------------Função Geral------------

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
                        <Button variant="contained" color="primary"  onClick={() => this.props.removendoDoCarrinho(item.id)} >
                        Remover
                        </Button>
                    </ThemeProvider>
                </div>)
            }
        })

        return (

            <div>

                <b>Carrinho</b>

                {carrinho}
                
                <div>
                    <p>Total: ${this.calcularValorTotal()}</p>
                    <button onClick = {this.props.finalizarCompra}>Finalizar</button>
                    
                </div>
            </div>
        )
    }
}