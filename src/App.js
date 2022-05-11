import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";

const Imagem = styled.div`
  height: 100px;
`;
const SecaoPacotesStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const SecaoStyleHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;

class App extends React.Component {
  state = {
    pacotesViagens: [
      {
        id: 1,
        name: "Lua Calisto",
        value: 300.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 2,
        name: "Lua Almateia",
        value: 900.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 3,
        name: "Lua IO",
        value: 300.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 4,
        name: "Lua Ganímedes",
        value: 500.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 5,
        name: "Lua Europa",
        value: 800.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
    ],

    filtroProduto: "",
    inputValorMin: "",
    inputValorMax: ""
  };

  //   adicionaViagemCarrinho = () => {
  //    //faça aqui a lógica do carrinho//

  valorMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  valorMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  produto = (event) => {
    this.setState({ filtroProduto: event.target.value });
  };

  render() {

    /* FILTRO SEM FINALIZAR, SO FUNCIONA MESMO O DE NOME DO PRODUTO*/

    const viagensFiltradasNome = this.state.pacotesViagens.filter((viagem) => {
      return viagem.name
        .toLowerCase()
        .includes(this.state.filtroProduto.toLowerCase());
    });

    /* const viagensFiltradasValor = this.state.pacotesViagens.filter((viagem) => {
      
       return (viagem.value <= this.state.inputValorMax || viagem.value >= this.state.inputValorMin)
        
    }); */

    const pacotesMapeados = viagensFiltradasNome.map((pacotes, index) => {
      return (
        <SecaoPacotesStyle key={index}>
          <div>
            <div>{pacotes.img}</div>
            <p>{pacotes.name}</p>
            <p>Valor: R$ {pacotes.value}</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        </SecaoPacotesStyle>
      );
    });

    return (
      <SecaoStyleHome>
        <Filtro
          nome="minimo"
          valueValMin={this.state.inputValorMin}
          onChangeValorMin={this.valorMin}
          nome="maximo"
          valueValMax={this.state.inputValorMax}
          onChangeValorMax={this.valorMax}
          nome="filterProduto"
          valueProduto={this.state.filtroProduto}
          onChangeProduto={this.produto}
        />

        <div>
          <p>Quantidade: 10</p>
          {/* <p>
            Ordenação: <section></section>
          </p> */}
          <div>{pacotesMapeados}</div>
        </div>

        <div>
          <Carrinho></Carrinho>
        </div>
      </SecaoStyleHome>
    );
  }
}

export default App;
