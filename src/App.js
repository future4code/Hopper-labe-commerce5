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

    filtroNome: "",
    filtroValorMin: "",
    filtroValorMax: "",
    /* order: "", */
  };

  //   adicionaViagemCarrinho = () => {
  //    //faça aqui a lógica do carrinho//

  valorMin = (event) => {
    this.setState({ filtroValorMin: event.target.value });
  };

  valorMax = (event) => {
    this.setState({ filtroValorMax: event.target.value });
  };

  produto = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

  onChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  render() {
    const pacotesFiltrados = this.state.pacotesViagens
      .filter((pacotes) => {
        return pacotes.name
          .toLowerCase()
          .includes(this.state.filtroNome.toLowerCase());
      })
      .filter((pacotes) => {
        return (
          this.state.filtroValorMin === "" ||
          pacotes.value >= this.state.filtroValorMin
        );
      })
      .filter((pacotes) => {
        return (
          this.state.filtroValorMax === "" ||
          pacotes.value <= this.state.filtroValorMax
        );
      })
      /* .sort((pacotes, proxPacote) => {
        switch (this.state.order) {
          case "crescente":
            return (
              pacotes.value >= proxPacote.value ||
              pacotes.name.lolcaleCompare(proxPacote.name) >=
                proxPacote.name.lolcaleCompare(pacotes.name)
            );
          default:
            return (
              pacotes.value <= proxPacote.value ||
              pacotes.name.lolcaleCompare(proxPacote.name) <=
                proxPacote.name.lolcaleCompare(pacotes.name)
            );
        }
      }) */
      .map((pacotes, index) => {
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
          valueValMin={this.state.filtroValorMin}
          onChangeValorMin={this.valorMin}
          valueValMax={this.state.filtroValorMax}
          onChangeValorMax={this.valorMax}
          valueProduto={this.state.filtroNome}
          onChangeProduto={this.produto}
        />

        <div>
          <p>Quantidade: 10</p>

          <label>
            Ordenação:
            <select
              name="order"
              value={this.state.order}
              onChange={this.onChangeOrder}
            >
              <option value="cres">Crescente</option>
              <option value="decres">Decrescente</option>
            </select>
          </label>

          <div>{pacotesFiltrados}</div>
        </div>

        <div>
          <Carrinho></Carrinho>
        </div>
      </SecaoStyleHome>
    );
  }
}

export default App;
