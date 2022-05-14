import React from "react";
import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import Astro1 from "./img/Astro1.png";
import Astro2 from "./img/Astro2.png";
import Astro3 from "./img/Astro3.png";
import Astro4 from "./img/Astro4(1).png";
import Astro5 from "./img/Astro5.png";

// const GlobalStyle = createGlobalStyle`
// *{
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }
// `;

const Imagem = styled.img`
  height: 100px;
`;
const SecaoPacotesStyle = styled.div`
  display: flex;
  border: 1px;
  padding: 10px;
  background-color: aquamarine;
  margin: 10px;
`;

const SecaoPacFiltrado = styled.div`
  display: flex;
  background-color: #cfbfb2;
  justify-content: space-between;
`;

const SecaoStyleHome = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: beige;
  height: 100vh;
  width: 100vw;
`;

class App extends React.Component {
  state = {
    pacotesViagens: [
      {
        id: 1,
        name: "Lua Calisto",
        value: 300.0,
        img: <Imagem src={Astro1} />,
      },
      {
        id: 2,
        name: "Lua Almateia",
        value: 900.0,
        img: <Imagem src={Astro2} />,
      },
      {
        id: 3,
        name: "Lua IO",
        value: 300.0,
        img: <Imagem src={Astro3} />,
      },
      {
        id: 4,
        name: "Lua Ganímedes",
        value: 500.0,
        img: <Imagem src={Astro4} />,
      },
      {
        id: 5,
        name: "Lua Europa",
        value: 800.0,
        img: <Imagem src={Astro5} />,
      },
    ],

    filtroNome: "",
    filtroValorMin: "",
    filtroValorMax: "",

    order: "crescente",
  };

  //   adicionaViagemCarrinho = () => {
  //    //faça aqui a lógica do carrinho//
  // addCarinho = (viagem) => {
  //   this.setState({
  //     carrinho: [...this.state.carrinho, viagem],
  //   });
  // };

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

      .sort((a, b) => {
        switch (this.state.order) {
          case "crescente":
            return  a.value - b.value
              
          
          default:
            return b.value - a.value;
              
            
        };
      })
      .map((pacotes, index) => {
        return (
          <SecaoPacotesStyle key={index}>
            <div>
              <div>{pacotes.img}</div>
              <p>{pacotes.name}</p>
              <p>Valor: R$ {pacotes.value}</p>
              <button >
                
                Adicionar ao Carrinho
              </button>
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
          onChangeOrder={this.state.order}
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
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </label>

          <SecaoPacFiltrado>{pacotesFiltrados}</SecaoPacFiltrado>
        </div>

        <div>
          <Carrinho></Carrinho>
        </div>
      </SecaoStyleHome>
    );
  }
}

export default App;
