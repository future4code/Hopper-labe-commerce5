import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import { createGlobalStyle } from "styled-components";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import Astro1 from "./img/Astro1.png";
import Astro2 from "./img/Astro2.png";
import Astro3 from "./img/Astro3.png";
import Astro4 from "./img/Astro4(1).png";
import Astro5 from "./img/Astro5.png";

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
 }
 `;

 const Header = styled.header`
 
 display: flex;
 flex-direction: column;
 align-items:center;
 padding:4vh;
 color:floralwhite;
 font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 background-image: url(https://i0.wp.com/www.eusemfronteiras.com.br/wp-content/uploads/2018/07/49046802_m.jpg?ssl=1);
 `

 const Main = styled.main`
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 margin-top: 5vh;
 
 `


const Imagem = styled.img`
  /* height: 100px; */
width: 15vw;
`;
const Card = styled.div`
  display: flex;
  text-align:center;
  border: 1px;
  padding: 3vh 2vw;
  background-color: aquamarine;
  margin: 10px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

const SecaoProduto = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  background-color: #cfbfb2;
  margin-top: 3vh;
  
`;

const Ordenacao = styled.div`
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  justify-content: space-between;

`


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
            return a.value - b.value;

          default:
            return b.value - a.value;
        }
      })
      .map((pacotes, index) => {
        return (
          <Card key={index}>
            <div>
              <div>{pacotes.img}</div>
              <p>{pacotes.name}</p>
              <p>Valor: R$ {pacotes.value}</p>
              <button>Adicionar ao Carrinho</button>
            </div>
          </Card>
        );
      });

    return (
      <div>
        <GlobalStyle />
        <Header>
          <h1>LUNÁSTICA</h1>
          <h3>REFERENCIA ESPACIAL EM VIAGENS LUNARES!</h3>
        </Header>
        <Main>
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
        <Ordenacao>
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
          </Ordenacao>
          <SecaoProduto>{pacotesFiltrados}</SecaoProduto>
        </div>

        
          <Carrinho></Carrinho>
       

      </Main>
      </div>
    );
  }
}

export default App;
