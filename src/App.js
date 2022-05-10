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
        value: 300.0,
        img: "",
      },
      {
        id: 3,
        name: "Lua IO",
        value: 300.0,
        img: "",
      },
      {
        id: 4,
        name: "Lua Ganímedes",
        value: 300.0,
        img: "",
      },
      {
        id: 5,
        name: "Lua Europa",
        value: 300.0,
        img: "",
      },
    ],
  };

  //   adicionaViagemCarrinho = () => {
  //    //faça aqui a lógica do carrinho//

  // };

  render() {
    const pacotesMapeados = this.state.pacotesViagens.map((pacotes, index) => {
      return (
        <SecaoPacotesStyle>
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
        <div>
          <Filtro></Filtro>
        </div>

        <div>
          <p>Quantidade: 10</p>
          <p>
            Ordenação: <section></section>
          </p>
          {pacotesMapeados}
        </div>

        <div>
          <Carrinho></Carrinho>
        </div>
      </SecaoStyleHome>
    );
  }
}

export default App;