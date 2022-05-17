import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Filtro from "./components/Filtro";
import Astro1 from "./img/Astro1.png";
import Astro2 from "./img/Astro2.png";
import Astro3 from "./img/Astro3.png";
import Astro4 from "./img/Astro4(1).png";
import Astro5 from "./img/Astro5.png";
import ImagemFundo from "./img/LuaFundoInteira.png";
import Foguete from "./icons/foguete.png";

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
 }
 `;

const Header = styled.header`
  display: flex;
  padding: 2vh;
  background-color: #e3e2df;
  justify-content: space-between;
  align-items: center;
  h1 {
    display: flex;
    color: #1f110e;

    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  h3 {
    display: flex;
    color: #1f110e;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: bolder;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
   {
     display: flex;
     flex-direction: column;
     text-align:center;
}





`;
const ImagemLogo = styled.img`
  display: flex;
  height: 30px;
  width: 30px;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${ImagemFundo});
  background-size: cover;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
     {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Imagem = styled.img`
  width: 15vw;
`;
const Card = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px;
  padding: 3vh 2vw;
  background-color: #bbb8a3;
  margin: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  p {
    font-size: 20px;
    color: #1f110e;
    font-weight: lighter;
  }
  button {
    background-color: #ede8d1;
    border: none;
    color: #797870;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
`;

const SecaoProduto = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h3 {
    display: flex;
    font-size: 25px;
  }
`;

const Ordenacao = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 25px;
    color: #ede8d1;
  }
  label {
    font-size: 25px;
    color: #ede8d1;
  }

  select {
    font-size: 20px;
    background-color: #ede8d1;
    color: #797870;
  }
`;
const CarrinhoStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 13rem;
  height: 50%;
  padding: 10vh 2vw;
  color: #1f110e;
  align-self: flex-start;
  margin-top: 7vh;
  background-color: #ede8d1;
  opacity: 0.6;
  button:hover {
  }
  h3 {
    font-size: 25px;
    font-weight: 400;
    margin-top: 2vh;
    color: #1f110e;
    text-decoration: underline;
  }
  p {
    margin-top: 2vh;
  }

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
    carrinho: [],
  };

  removerPacoteDoCarrinho = (idPacoteARemover) => {
    const carrinhoAtualizado = this.state.carrinho.filter(
      (compra) => compra.pacote.id !== idPacoteARemover
    );
    this.state.carrinho = carrinhoAtualizado;
    this.setState({ ...this.state });
  };
  atualizarCarrinho = (novoPacote) => {
    const compraJaAdicionada = this.state.carrinho.find(
      (compra) => compra.pacote.id === novoPacote.id
    );
    if (compraJaAdicionada) {
      compraJaAdicionada.quantidade = compraJaAdicionada.quantidade + 1;
    } else {
      this.state.carrinho.push({ pacote: novoPacote, quantidade: 1 });
    }
    this.setState({ ...this.state });
  };
  totalPacotes = (totalCarrinho) => {
    let novoValor = totalCarrinho.map((valor) => {
      return valor.total;
    });
    let soma = novoValor.reduce(
      (primeiroValor, segundoValor) => primeiroValor + segundoValor,
      0
    );

    return soma;
  };
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
    const compras = this.state.carrinho.map((novaCompra, index) => {
      novaCompra.total = novaCompra.pacote.value * novaCompra.quantidade;

      return (
        <div key={index}>
          <div>
            <button
              onClick={() => this.removerPacoteDoCarrinho(novaCompra.pacote.id)}
            >
              X
            </button>
          </div>
          <p> Produto: {novaCompra.pacote.name} </p>
          <p>Valor: {novaCompra.pacote.value} </p>
          <p>Qtd:{novaCompra.quantidade} </p>
          <p>Valor total:{novaCompra.total} </p>
        </div>
      );
    });

    let total = this.totalPacotes(this.state.carrinho);
    const pacotesFiltrados = this.state.pacotesViagens
      .filter((pacote) => {
        return pacote.name

          .toLowerCase()
          .includes(this.state.filtroNome.toLowerCase());
      })
      .filter((pacote) => {
        return (
          this.state.filtroValorMin === "" ||
          pacote.value >= this.state.filtroValorMin
        );
      })
      .filter((pacote) => {
        return (
          this.state.filtroValorMax === "" ||
          pacote.value <= this.state.filtroValorMax
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
      .map((pacote, index) => {
        return (
          <Card key={index}>
            <div>
              <div>{pacote.img}</div>
              <p>{pacote.name}</p>
              <p>Valor: R$ {pacote.value}</p>
              <button onClick={() => this.atualizarCarrinho(pacote)}>
                Adicionar ao Carrinho{" "}
              </button>
            </div>
          </Card>
        );
      });

    return (
      <div>
        <GlobalStyle />
        <Header>
          <h1>LUNÁSTICA</h1>
          <h3>REFERÊNCIA MUNDIAL EM VIAGENS LUNARES</h3>
          <ImagemLogo src={Foguete} />
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

          <CarrinhoStyled>
            <h3>CARRINHO: </h3>
            {compras}
            <h5>Totais de compra:{total} </h5>
          </CarrinhoStyled>
        </Main>
      </div>
    );
  }
}

export default App;
